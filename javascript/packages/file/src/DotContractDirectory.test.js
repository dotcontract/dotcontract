import fs from 'fs';
import temp from 'temp';

import DotContractDirectory from "./DotContractDirectory.js";

describe("DotContractDirectory", () => {
  it("should work", async () => {
    temp.track();
    const dir = temp.mkdirSync('ex1');
    const pd = await DotContractDirectory.generate(dir);
    const genesis_json_string = fs.readFileSync(`${dir}/genesis.json`).toString();
    const genesis_json = JSON.parse(genesis_json_string);
    expect(genesis_json.network).toBe("main.powo.network");
    expect(genesis_json.contract_id).toBeTruthy();
    expect(genesis_json.signature).toBeTruthy();

    const dir2 = temp.mkdirSync('ex1-zip');
    await pd.zip(`${dir2}/ex1.zip`);
    const a = fs.statSync(`${dir2}/ex1.zip`);
    expect(a.size).toBeTruthy();
  });
});