import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as gen_keypair from '../commands/gen_keypair.js';
import * as zip from '../commands/unzip.js';
import * as unzip from '../commands/zip.js';

import * as contract_commit from '../commands/commit.js';
import * as contract_info from '../commands/info.js';
import * as contract_create from '../commands/create.js';
import * as contract_pull from '../commands/pull.js';
import * as contract_push from '../commands/push.js';
import * as contract_register from '../commands/register.js';

const { argv } = yargs(hideBin(process.argv))
  .scriptName("contract")
  .help('h')
  .alias('h', 'help')
  .wrap(null)
  // .command(zip)
  // .command(unzip)
  .command(contract_create)
  .command(contract_commit)
  .command(contract_info)
  .command(contract_pull)
  .command(contract_push)
  .command(contract_register)
  .command(gen_keypair)
  .demandCommand(1, 'command not recognized')
  .strict()
  ;
