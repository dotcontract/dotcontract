import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as gen_keypair from '../commands/gen_keypair.js';
import * as zip from '../commands/unzip.js';
import * as unzip from '../commands/zip.js';

import * as contract_commit from '../commands/contract/commit.js';
import * as contract_info from '../commands/contract/info.js';
import * as contract_create from '../commands/contract/create.js';
import * as contract_pull from '../commands/contract/pull.js';
import * as contract_push from '../commands/contract/push.js';
import * as contract_register from '../commands/contract/register.js';

const { argv } = yargs(hideBin(process.argv))
  .scriptName("dotcontract-cli")
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
