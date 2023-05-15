import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as gen_keypair from '../commands/gen_keypair.js';
import * as pack from '../commands/pack.js';
import * as unpack from '../commands/unpack.js';

import * as commit from '../commands/commit.js';
import * as info from '../commands/info.js';
import * as status from '../commands/status.js';
import * as log from '../commands/log.js';
import * as create from '../commands/create.js';
import * as pull from '../commands/pull.js';
import * as push from '../commands/push.js';
import * as delete_commit from '../commands/delete.js';

// unused return variable prevents node from prematurely exiting yargs
/* eslint-disable no-unused-vars */
const { argv } = yargs(hideBin(process.argv))
  .scriptName("contract")
  .help('h')
  .alias('h', 'help')
  .wrap(null)

  .command(create)
  .command(commit)
  .command(info)
  .command(status)
  .command(log)
  .command(pull)
  .command(push)
  .command(pack)
  .command(unpack)
  .command(gen_keypair)
  .command(delete_commit)
  .demandCommand(1, 'command not recognized')
  .strict()
  ;
