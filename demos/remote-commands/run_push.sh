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
contract create --file remote_push_test.contract
docker cp remote_push_test.contract dotcontract-remote-01-pull:/home/dotcontract/remote_push_test.contract

comment create a contract and link it to the remote contract
contract create --dir remote_push_test
contract link --dir remote_push_test --url dotcontract@localhost:12345/home/dotcontract/remote_push_test.contract -i ./config/id_ed25519

comment make commits to the local contract
contract commit --dir remote_push_test --post /hello.text "world"
contract commit --dir remote_push_test --post /welcome.text "back"

comment check log of remote before push
contract log --dir remote_push_test --linked

comment push commits from the local contract to the remote contract
contract push --dir remote_push_test

comment check log of remote after push
contract log --dir remote_push_test --linked

comment stop ssh server
set +x
# stop ssh server
./scripts/docker/stop