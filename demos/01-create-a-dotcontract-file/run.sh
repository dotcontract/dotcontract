#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh

rm -rf ./example.contract
set -x

comment "Create a DotContract file"
contract create -f example.contract

comment "get info about example.contract"
contract info -f example.contract

comment "commit a post action"
contract commit -f example.contract --post /welcome.text "hello"

comment "see what happened"
contract log -f example.contract