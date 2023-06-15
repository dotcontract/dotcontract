import { expect, describe, it } from "@jest/globals";

import fs from "fs";
import temp from "temp";
temp.track();
import dirnameFromImportMeta from "@dotcontract/utils/dirnameFromImportMeta";
const __dirname = dirnameFromImportMeta(import.meta);

import DotContractFile from "./DotContractFile.js";

describe("DotContractFile", () => {
  it("should work", async () => {
    const pf = await DotContractFile.open(
      `${__dirname}/../fixtures/EmptyContract.contract`
    );
    const is_valid = await pf.isValid();
    expect(is_valid).toBeTruthy();
  });
});
