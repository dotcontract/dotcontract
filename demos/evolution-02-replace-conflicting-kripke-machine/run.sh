#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh

rm -rf ./.contract

set -x

comment "creating new dotcontract directory"
contract create --dir .

comment "posting hello world message with evolution with no arrows (overconstrained)"
contract commit --post "/hello.text" "world" --evolve ./evolution1.json

comment "see the current kripke machine"
contract machine

comment "can't take step, previous evolution was too constraining and had no arrows"
contract commit --post "/hello.text" "world"

comment "take step by including compliant evolution with an arrow"
contract commit --post "/hello.text" "world" --evolve ./evolution2.json
