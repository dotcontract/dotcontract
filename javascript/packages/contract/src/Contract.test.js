import Key from "@dotcontract/utils/Key";
import Contract from "./Contract.js";

describe("Contract", () => {
  it("should work", async () => {
    const c = new Contract();
    await c.post("test");
  });

  it("should generate a signed genesis", async () => {
    const signed_init = await Contract.generateGenesis();
    expect(signed_init.contract_id).toBeTruthy();
    expect(signed_init.network).toBeTruthy();
    expect(signed_init.signature).toBeTruthy();
  });

  it("should allow for method constraints", async () => {
    const c = new Contract();
    await c.post("test");
    await c.constrain(`alwaysMust (method_is("post"))`);
    await c.post("test");
    expect(async () => {
      await c.constrain(`alwaysMust (true)`);
    }).rejects.toThrow();
  });

  it("should allow for content constraints", async () => {
    const c = new Contract();
    await c.constrain(
      `alwaysMust (
        content_keyIsPresent("coin") and 
        (content_keyHasValue("coin", "heads") or content_keyHasValue("coin", "tails"))
      )`
    );
    const [canPostTest, canPostTestError] = await c.canPost("test");
    expect(canPostTest).toBe(false);
    const [canPostHeads, canPostHeadsError] = await c.canPost({coin: "heads"});
    expect(canPostHeads).not.toBe(false);
  });

  it("should allow for signature constraints", async () => {
    const c = new Contract();
    const my_key = await Key.generate();
    const my_key_public_multiaddress = await my_key.asPublicMultiaddress();

    const constraint = `alwaysMust (signed_by("${my_key_public_multiaddress}"))`;
    await c.constrain(constraint);

    const [canPostTest, canPostTestError] = await c.canPost("test");
    expect(canPostTest).toBe(false); 

    await c.startSigningCommitsWith(my_key);
    const [canPostSignedTest, canPostSignedTestError] = await c.canPost("test");
    expect(canPostSignedTest).not.toBe(false); 

    const different_key = await Key.generate();
    await c.startSigningCommitsWithOnly(different_key);
    const [canPostSignedByOtherTest, canPostSignedByOtherTestError] = await c.canPost("test");
    expect(canPostSignedByOtherTest).toBe(false); 
  });

  it.skip("should allow for definitions and content constraints", async () => {
    const c = new Contract();
    await c.define("coinOptions", "Set of Strings");
    await c.post({ coinOptions: { add: "Heads" } });
    await c.post({ coinOptions: { add: "Tails" } });
    await c.constrain(
      `alwaysMust (content_keyNotPresent("coin") or content_keyHasValueIn("coin", "coinOptions"))`
    );

    c.post({ coin: "Heads" });
    c.post({ update: "hey all, we improved some stuff..." });
    c.post({ coin: "Tails" });
  });

  it.skip("should allow for nested signature constraints", async () => {
    const c = new Contract();
    await c.constrain(
      `alwaysMust (signatures_include("/user-id/0xCommunity/user-id/0xCommittee/ed25519-pub/0xSpecialKey"))`
    );
  });

  it.skip("should allow for definitions and signature constraints", async () => {
    const c = new Contract();
    c.define("users", "Set of Signers");
    c.post({ users: { add: "/ed25519-pub/0xfoy" } });
    c.post({ users: { add: "/user-id/0xsophia" } });
    c.constrain(`alwaysMust (signatures_includeOneFrom("users"))`);

    const my_sign_tool = SignTool.fromKeyPair(my_public_key, my_private_key);
    c.startSigningCommitsWith(my_sign_tool);
    c.post({ users: { add: "/user-id/0xbud" } });
    c.post({ users: { add: "/user-id/0xclaudia" } });
    c.post({ users: { add: "/user-id/0xjean" } });
    c.constrain(`alwaysMust (signatures_includeOneFromAll("users"))`);
  });
});
