import KripkeMachine from "./KripkeMachine";
import Step from "./Step";
import Evolution from "./Evolution";

import JSONFile from "@dotcontract/utils/JSONFile";
import dirnameFromImportMeta from "@dotcontract/utils/dirnameFromImportMeta";
const __dirname = dirnameFromImportMeta(import.meta);
function fixturesFile(fn) {
  return `${__dirname}/../../fixtures/${fn}`;
}

describe("KripkeMachine", () => {
  it("should work", async () => {
    let km, r;
    km = KripkeMachine.createLooper();
    r = km.canTakeStep(new Step("anything"));
    expect(r).toBe(true);

    const json = JSONFile.readSync(fixturesFile("km/two_step.json"));
    km = KripkeMachine.fromJSON(json);

    r = km.canTakeStep(new Step("left"));
    expect(r).toBe(true);
    r = km.canTakeStep(new Step("right"));
    expect(r).toBe(true);

    km.takeStep(new Step("left"));
    r = km.canTakeStep(new Step("left"));
    expect(r).toBe(false);
    r = km.canTakeStep(new Step("right"));
    expect(r).toBe(true);
  });

  it("applyEvolution", async () => {
    let km;
    const json = JSONFile.readSync(fixturesFile("km/sign.json"));
    km = KripkeMachine.fromJSON(json);

    const evolution_json = JSONFile.readSync(
      fixturesFile("evolution/sign_and_not_defraud.json")
    );
    const evolution = Evolution.fromJSON(evolution_json);

    const km2 = km.clone();
    km2.applyEvolution(evolution);

    const km3 = km.clone();
    km3.canEvolve("gfp(@x, [*]@x and [defraud]false)", evolution);
  });
});
