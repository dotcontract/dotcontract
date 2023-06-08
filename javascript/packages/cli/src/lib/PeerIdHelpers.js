import { readFileSync } from "fs";
import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { createEd25519PeerId } from "@libp2p/peer-id-factory";
import { createFromJSON as _createFromJSON } from "@libp2p/peer-id-factory";

export function createFromJSONString(json) {
  const obj = JSON.parse(json);
  return _createFromJSON(obj);
}

export async function create() {
  return createEd25519PeerId();
}

export function exportToJSON(peerId, excludePrivateKey = false) {
  return {
    id: peerId.toString(),
    pubKey: uint8ArrayToString(peerId.publicKey, "base64pad"),
    privKey:
      excludePrivateKey === true || peerId.privateKey == null
        ? undefined
        : uint8ArrayToString(peerId.privateKey, "base64pad"),
  };
}

export function exportToJSONString(peerId, excludePrivateKey = false) {
  return JSON.stringify(exportToJSON(peerId, excludePrivateKey));
}

export function createFromJSONFile(path) {
  const json = readFileSync(path, "utf-8");
  return createFromJSONString(json);
}

export default {
  exportToJSON,
  exportToJSONString,
  create,
  createFromJSONString,
  createFromJSONFile,
};
