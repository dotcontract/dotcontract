#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as gen_keypair from "../commands/gen_keypair.js";
import * as pubkey from "../commands/pubkey.js";

import * as pack from "../commands/pack.js";
import * as unpack from "../commands/unpack.js";

import * as commit from "../commands/commit.js";
import * as info from "../commands/info.js";
import * as status from "../commands/status.js";
import * as log from "../commands/log.js";
import * as create from "../commands/create.js";
import * as pull from "../commands/pull.js";
import * as push from "../commands/push.js";
import * as machine from "../commands/machine.js";
import * as undo from "../commands/undo.js";
import * as link from "../commands/link.js";
import * as clone from "../commands/clone.js";
import * as new_id from "../commands/new_id.js";
import * as whoami from "../commands/whoami.js";

// unused return variable prevents node from prematurely exiting yargs
/* eslint-disable no-unused-vars */
const { argv } = yargs(hideBin(process.argv))
  .scriptName("contract")
  .help("h")
  .alias("h", "help")
  .wrap(null)
  .command(create)
  .command(commit)
  .command(clone)
  .command(link)
  .command(undo)
  .command(info)
  .command(status)
  .command(log)
  .command(pull)
  .command(push)
  .command(pack)
  .command(unpack)
  .command(machine)
  .command(gen_keypair)
  .command(pubkey)
  .command(new_id)
  .command(whoami)
  .demandCommand(1, "command not recognized")
  .epilogue(
    "for more information, view the docs at https://www.dotcontract.org/docs"
  )
  .strict();
