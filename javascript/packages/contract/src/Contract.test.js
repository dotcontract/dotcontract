import Contract from "./Contract.js";

describe("Contract", () => {
  it("should work", async () => {
    const signed_init = await Contract.generateGenesis();
    expect(signed_init.genesis.contract_id).toBeTruthy();
    expect(signed_init['genesis.signature']).toBeTruthy();

    const c = new Contract();
  });
});
