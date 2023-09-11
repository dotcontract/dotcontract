import { writeFileSync, readFileSync } from "fs";
import {
  generateKeyPair,
  unmarshalPublicKey,
  unmarshalPrivateKey,
} from "@libp2p/crypto/keys";
import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { fromString as uint8ArrayFromString } from "uint8arrays/from-string";
import { base58btc } from "multiformats/bases/base58";
import { identity } from "multiformats/hashes/identity";
import * as Digest from "multiformats/hashes/digest";
import JSONStringifyDeterministic from "json-stringify-deterministic";

export default class Key {
  constructor(key) {
    this.key = key;
    return this;
  }

  static async generate(type = "Ed25519") {
    const key = await generateKeyPair(type);
    return new Key(key);
  }

  // base58identity is used for addresses

  static uint8ArrayAsBase58Identity(bytes) {
    const encoding = identity.digest(bytes);
    return base58btc.encode(encoding.bytes).substring(1);
  }

  static keyAsBase58Identity(key) {
    return this.uint8ArrayAsBase58Identity(key.bytes);
  }

  async publicKeyAsBase58Identity() {
    return this.constructor.keyAsBase58Identity(this.key.public);
  }

  async asPublicKeyId() {
    return await this.publicKeyAsBase58Identity();
  }

  async asPublicAddress() {
    return await this.publicKeyAsBase58Identity();
  }

  // base64pad is used for storage

  static uint8ArrayAsBase64Pad(bytes) {
    return uint8ArrayToString(bytes, "base64pad");
  }

  static keyAsBase64Pad(bytes) {
    return this.uint8ArrayAsBase64Pad(bytes);
  }

  async publicKeyAsBase64Pad() {
    return this.constructor.keyAsBase64Pad(this.key.public.bytes);
  }

  async privateKeyAsBase64Pad() {
    return this.constructor.keyAsBase64Pad(this.key.bytes);
  }

  // multiaddr is used in modality

  async publicKeyToMultiaddrString() {
    const public_key_id = await this.publicKeyAsBase58Identity();
    const type = "ed25519";
    return `/${type}-pub/${public_key_id}`;
  }

  async asPublicMultiaddress() {
    return await this.publicKeyToMultiaddrString();
  }

  static fromPublicKey(public_key_id, type = "ed25519") {
    return this.fromPublicMultiaddress(`/${type}-pub/${public_key_id}`);
  }

  static fromPublicMultiaddress(multiaddress) {
    // TODO for real
    const m = multiaddress.match(/^(.+)-pub\/(.+)$/);
    if (!m) {
      return;
    }
    const type = m[1];
    const public_key_id = m[2];
    const multihash = Digest.decode(base58btc.decode(`z${public_key_id}`));
    const public_key = multihash.digest;
    const key = new Key({
      public: unmarshalPublicKey(public_key),
    });
    return key;
  }

  // json

  static async fromJSON({ id, public_key, private_key }) {
    if (private_key) {
      const key = await unmarshalPrivateKey(
        uint8ArrayFromString(private_key, "base64pad")
      );
      return new Key(key);
    } else if (public_key) {
      const key = await unmarshalPrivateKey(
        uint8ArrayFromString(public_key, "base64pad")
      );
      return new Key(key);
    }
  }

  static async fromJSONString(str) {
    return await this.fromJSON(JSON.parse(str));
  }

  static async fromJSONFile(fp) {
    return await this.fromJSONString(readFileSync(fp));
  }

  async asPublicJSON() {
    const id = await this.publicKeyAsBase58Identity();
    const public_key = await this.publicKeyAsBase64Pad();
    return {
      id,
      public_key,
    };
  }

  async asPublicJSONString() {
    const json = await this.toPublicJSON();
    return JSON.stringify(json);
  }

  async asPublicJSONFile(path) {
    const json_string = await this.toPublicJSONString();
    return writeFileSync(path, json_string, "utf-8");
  }

  async asJSON() {
    const id = await this.publicKeyAsBase58Identity();
    const public_key = await this.publicKeyAsBase64Pad();
    const private_key = await this.privateKeyAsBase64Pad();
    return {
      id,
      public_key,
      private_key,
    };
  }

  async asJSONString() {
    const json = await this.asJSON();
    return JSON.stringify(json);
  }

  async asJSONFile(path) {
    const json_string = await this.asJSONString();
    return writeFileSync(path, json_string, "utf-8");
  }

  // signing

  async signBytes(bytes) {
    return this.key.sign(bytes);
  }

  async signString(str) {
    const bytes = uint8ArrayFromString(str);
    return await this.signBytes(bytes);
  }

  async signStringAsBase64Pad(str) {
    const signature_in_bytes = await this.signString(str);
    return uint8ArrayToString(signature_in_bytes, "base64pad");
  }

  async signFile() {}

  async signJSON(json) {
    const str = JSONStringifyDeterministic(json);
    return await this.signStringAsBase64Pad(str);
  }

  async signJSONElement(json, name, suffix = ".signature") {
    const signature = await this.signJSON(json[name]);
    return {
      ...json,
      [`${name}${suffix}`]: signature,
    };
  }

  async signJSONAsKey(json, key = "signature") {
    const signature = await this.signJSON(json);
    return {
      ...json,
      [key]: signature,
    };
  }

  // verify signatures

  async verifySignatureForBytes(signature, bytes) {
    const signature_bytes = uint8ArrayFromString(signature, "base64pad");
    return await this.key.public.verify(bytes, signature_bytes);
  }

  async verifySignatureForString(signature, str) {
    const bytes = uint8ArrayFromString(str);
    return await this.verifySignatureForBytes(signature, bytes);
  }

  async verifySignatureForJson(signature, json) {
    const str = JSONStringifyDeterministic(json);
    return await this.verifySignatureForString(signature, str);
  }

  async verifySignaturesInJson(json, suffix = ".signature") {
    const suffix_for_regex = suffix
      .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
      .replace(/-/g, "\\x2d");
    const suffix_regex = `(.+)${suffix_for_regex}$`;
    for (const name in json) {
      const m = name.match(suffix_regex);
      if (m) {
        const str = JSONStringifyDeterministic(json[m[1]]);
        const sig = json[name];
        const r = await this.verifySignatureForString(sig, str);
        if (!r) {
          return false;
        }
      }
    }
    return true;
  }
}
