#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh

export SSH_PORT=12301
export CONTAINER_SUFFIX="-run-pull"

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
contract create --file remote_pull_test.contract
contract commit --file remote_pull_test.contract --post /hello.text "world"
contract commit --file remote_pull_test.contract --post /welcome.text "back"
docker cp remote_pull_test.contract dotcontract-remote:/home/dotcontract/remote_pull_test.contract

comment create a contract and link it to the remote contract
contract create --dir remote_pull_test
contract link --dir remote_pull_test --url dotcontract@localhost:12345/home/dotcontract/remote_pull_test.contract -i ./config/id_ed25519

comment check log before pull
contract log --dir remote_pull_test

comment pull commits from the remote contract to the local contract
contract pull --dir remote_pull_test

comment check log after pull
contract log --dir remote_pull_test

comment stop ssh server
set +x
# stop ssh server
./scripts/docker/stop