import JSONFile from "@dotcontract/utils/JSONFile";
import Key from "@dotcontract/utils/Key";
import temp from "temp";
temp.track();

export const CommonNetworkArgs = {
  "data-dir": {},
  network: {},
  "key-file": {},
  bootstrapper: {
    type: "array",
  },
  "bootstrappers-file": {},
  "network-genesis-file": {},
  "dev-key": {},
  listen: {
    type: "array",
  },
};

export async function parseNetworkArgs(argv) {
  let key;
  const data_dir = (() => {
    if (argv["data-dir"]) {
      return argv["data-dir"];
    }
    const data_dir = temp.mkdirSync();
    return data_dir;
  })();
  let network;
  let listen = [];
  let announce = [];
  if (argv["key-file"]) {
    key = await Key.fromJSONFile(argv["key-file"]);
  }
  if (argv["listen"]) {
    listen = argv["listen"];
  }
  if (argv["announce"]) {
    listen = argv["announce"];
  }
  return {
    key,
    network,
    data_dir,
    listen,
    announce,
  };
}
