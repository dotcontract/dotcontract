#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh

set -x
comment start ssh server
set +x
./scripts/docker/stop
./scripts/docker/build-once &> /dev/null
sleep 3
./scripts/docker/start &> /dev/null &
SSH_SERVER_PID=$!
sleep 3
set -x
comment ssh server up

comment create a contract and copy it to the remote server
contract create --file linktest.contract
contract commit --file linktest.contract --post /hello.text "world"
contract commit --file linktest.contract --post /welcome.text "back"
docker cp linktest.contract dotcontract-remote-01-pull:/home/dotcontract/linktest.contract

comment create a contract and link it to the remote contract
contract create --dir linktest
contract link --dir linktest --url dotcontract@localhost:12345/home/dotcontract/linktest.contract -i ./config/id_ed25519

comment check log before pull
contract log --dir linktest

comment pull commits from the remote contract to the local contract
contract pull --dir linktest

comment check log after pull
contract log --dir linktest

comment stop ssh server
set +x
# stop ssh server
./scripts/docker/stop