#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh

rm -rf ./.contract
set -x

comment "Create a DotContract directory"
contract create -d .

comment "we don't need to specify the directory in future commands"
comment "this is because we're already in a dir with .contract directory"

comment "get info about .contract"
contract info

comment "commit a post action"
contract commit --post /welcome.text "hello"

comment "see what happened"
contract log