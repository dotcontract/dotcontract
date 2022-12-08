import Modality from './Modality';

describe("Modality", () => {
  it("expandConstraintFunctions", async () => {
    const ec = Modality.expandConstraintFunctions(`alwaysMust (method_is("post")) until (false)`)
    expect(ec.constraint).toBe('alwaysMust (method_is__91_34_112_111_115_116_34_93) until (false)');
  });

  it("expandConstraintFunctions", async () => {
    const ec = Modality.expandConstraintFunctions(`alwaysMust (method_is("post")) until (false)`)
    expect(ec.constraint).toBe('alwaysMust (method_is__91_34_112_111_115_116_34_93) until (false)');
  });
});