import fs from "fs";
import temp from "temp";
temp.track();

import Key from "@dotcontract/utils/Key";

import Directory from "./DotContractDirectory.js";

describe("Directory", () => {
  it("should work", async () => {
    const dir = temp.mkdirSync("ex1");
    const pd = await Directory.generate(dir);

    const dotcontract_json_string = fs
      .readFileSync(`${dir}/dotcontract.json`)
      .toString();
    const dotcontract_json = JSON.parse(dotcontract_json_string);
    expect(dotcontract_json.genesis.contract_id).toBeTruthy();
    expect(dotcontract_json["genesis.signature"]).toBeTruthy();
    const genesis_key = Key.fromPublicKey(dotcontract_json.genesis.contract_id);
    const v0 = await genesis_key.verifySignaturesInJson(dotcontract_json);
    expect(v0).toBeTruthy();
    const dotcontract_json_changed_genesis = {
      ...dotcontract_json,
      genesis: {
        ...dotcontract_json.genesis,
        network_id: null,
        contract_id: null,
      },
    };
    const v1 = await genesis_key.verifySignaturesInJson(
      dotcontract_json_changed_genesis
    );
    expect(v1).toBeFalsy();

    // adding a commit
    // --
    // creation with specified origin
    // changing origin
    // status of directory vs origin
    // --
    // pulling from origin
    // pushing to origin
    // --
    // adding a draft
    // adding a commit with a file
    // pulling a file from host

    const dir2 = temp.mkdirSync("ex1-zip");
    await pd.zip(`${dir2}/ex1.zip`);
    const a = fs.statSync(`${dir2}/ex1.zip`);
    expect(a.size).toBeTruthy();
  });
});
