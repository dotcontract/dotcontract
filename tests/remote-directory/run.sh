#!/bin/bash

TEST_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

source ../setup.sh
set -e

before_test $TEST_DIR

cd $TEST_DIR/tmp

echo "This is some text" >> temp.txt 
contract gen_keypair >> key.keypair

echo "Remote Link tests"
# Remote Link Operations
## distinct container for each node version
## used by github actions
NODE_VERSION_ID=$(node -v | sed 's/[^0-9]*//g')
export SSH_PORT=$((12300 + $NODE_VERSION_ID))
export CONTAINER_SUFFIX="-test-dirs-$NODE_VERSION_ID"
DOCKER_WITH_SSH_DIR=$TESTS_DIR/../../fixtures/docker-with-ssh
$DOCKER_WITH_SSH_DIR/scripts/docker/stop
$DOCKER_WITH_SSH_DIR/scripts/docker/build-once &> /dev/null
sleep 3
$DOCKER_WITH_SSH_DIR/scripts/docker/start &> /dev/null &
SSH_SERVER_PID=$!
sleep 3
. $DOCKER_WITH_SSH_DIR/scripts/docker/settings


contract create -f remote_test1.contract
contract commit -f remote_test1.contract --post /hello.text "world"
docker cp remote_test1.contract $CONTAINER_NAME:/home/dotcontract/remote_test1.contract

contract create -d remote_test2

# Link
contract link -d remote_test2 --url dotcontract@localhost:$SSH_PORT/home/dotcontract/remote_test1.contract -i $DOCKER_WITH_SSH_DIR/config/id_ed25519

# Pull
contract pull -d remote_test2

# Push
contract commit -d remote_test2 --post /welcome.text "back"
contract push -d remote_test2

# Log linked
contract log -d remote_test2 --linked

assert_line_count "$(contract log -d remote_test2 --linked)" 13 

# Stop docker
$DOCKER_WITH_SSH_DIR/scripts/docker/stop

# # Cleanup
after_test $TEST_DIR