import { expect, describe, it } from "@jest/globals";

import System from "./System";
import Step from "./Step";

import JSONFile from "@dotcontract/utils/JSONFile";
import dirnameFromImportMeta from "@dotcontract/utils/dirnameFromImportMeta";
const __dirname = dirnameFromImportMeta(import.meta);
function fixturesFile(fn) {
  return `${__dirname}/../../fixtures/${fn}`;
}

describe("System", () => {
  it("should work", async () => {
    let ss, r;
    ss = System.createLooper();
    r = ss.canTakeStep(new Step("anything"));
    expect(r).toBe(true);

    const json = JSONFile.readSync(fixturesFile("km/two_step.json"));
    ss = System.fromJSON(json.systems[0]);

    r = ss.canTakeStep(new Step("left"));
    expect(r).toBe(true);
    r = ss.canTakeStep(new Step("right"));
    expect(r).toBe(true);

    ss.takeStep(new Step("left"));
    r = ss.canTakeStep(new Step("left"));
    expect(r).toBe(false);
    r = ss.canTakeStep(new Step("right"));
    expect(r).toBe(true);
  });
});
