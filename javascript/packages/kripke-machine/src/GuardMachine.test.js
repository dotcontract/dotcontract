import GuardMachine from "./GuardMachine.js";

describe("GuardMachine", () => {
  it("should work", async () => {
    let gm, r, err;

    gm = new GuardMachine();

    // anything is possible
    [r, err] = await gm.canTakeStep({
      actions: ["a", "b", "c"],
    });
    expect(r).toBeTruthy();

    // constraint requires inclusion of mod action
    [r, err] = await gm.canTakeStep({
      actions: ["a"],
      constraint: "alwaysMust (a)",
    });
    expect(r).toBe(false);

    // constraints observed at next step
    await gm.takeStep({
      actions: ["%"],
      constraint: "alwaysMust (a)",
    });
    [r, err] = await gm.canTakeStep({
      actions: ["b"],
    });
    expect(r).toBe(false);
    [r, err] = await gm.canTakeStep({
      actions: ["a"],
    });
    expect(r).toBeTruthy();
    await gm.takeStep({
      actions: ["a", "%"],
      constraint: "alwaysMust (b)"
    });
    [r, err] = await gm.canTakeStep({
      actions: ["b"],
    });
    expect(r).toBe(false); 
    [r, err] = await gm.canTakeStep({
      actions: ["a", "b"],
    });
    expect(r).toBeTruthy();
 
    // constraint removed after until event
    gm = new GuardMachine();
    await gm.takeStep({
      actions: ["%"],
      constraint: "alwaysMust (a) until (b)",
    });
    expect(r).toBeTruthy();
    [r, err] = await gm.canTakeStep({
      actions: ["b"],
    });
    expect(r).toBe(false);
    await gm.takeStep({
      actions: ["a", "b"],
    });
    [r, err] = await gm.canTakeStep({
      actions: ["b"],
    });
    expect(r).toBe(false);
  });
});
