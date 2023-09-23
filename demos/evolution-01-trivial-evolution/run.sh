#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh

rm -rf ./.contract

set -x

comment "creating new dotcontract directory"
contract create --dir .

comment "see the default kripke machine"
contract machine

comment "posting hello world message with trivial evolution"
contract commit --post "/hello.text" "world" --evolve ./evolution.json

comment "see what happened"
contract log


comment "see the current kripke machine"
contract machine