import { expect, describe, it } from "@jest/globals";

import Key from "./Key";

describe("Key", () => {
  it("should work", async () => {
    const key = await Key.generate();
    const public_multiaddress = await key.asPublicMultiaddress();
    const public_address = await key.asPublicAddress();
    expect(public_multiaddress).toBe(`/ed25519-pub/${public_address}`);

    const json = { ok: true };
    const signature = await key.signJSON(json);

    const shared_key = Key.fromPublicMultiaddress(public_multiaddress);
    const shared_key_as_public_multiaddress =
      await shared_key.asPublicMultiaddress();
    expect(shared_key_as_public_multiaddress).toBe(public_multiaddress);

    const result = shared_key.verifySignatureForJson(signature, json);
    expect(result).toBe(true);

    const json_with_signature = await key.signJSONElement(json, "ok");
    const result2 = await shared_key.verifySignaturesInJson(
      json_with_signature
    );
    expect(result2).toBe(true);
  });
});
