import fs from "fs";
import temp from "temp";
import dirnameFromImportMeta from "@dotcontract/utils/dirnameFromImportMeta";
const __dirname = dirnameFromImportMeta(import.meta);

import DotContractFile from "./DotContractFile.js";

describe("DotContractFile", () => {
  it("should work", async () => {
    const pf = await DotContractFile.open(
      `${__dirname}/../fixtures/EmptyContract.powo`
    );
    const is_valid = await pf.isValid();
    expect(is_valid).toBeTruthy();
  });
});
