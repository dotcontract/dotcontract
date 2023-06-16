#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh

set -x
comment start ssh server
set +x
./scripts/docker/stop
sleep 3
./scripts/docker/start &> /dev/null &
SSH_SERVER_PID=$!
sleep 3
set -x
comment ssh server up

comment run cmd via ssh
./scripts/run-ssh-cmd "echo hello there"

comment stop ssh server
set +x
# stop ssh server
./scripts/docker/stop