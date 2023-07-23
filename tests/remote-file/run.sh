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
export CONTAINER_SUFFIX="-test-file-$NODE_VERSION_ID"
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

contract create -f remote_test2.contract

echo "Remote Link tests > Link"
# Link
contract link -f remote_test2.contract --url dotcontract@localhost:$SSH_PORT/home/dotcontract/remote_test1.contract -i $DOCKER_WITH_SSH_DIR/config/id_ed25519

echo "Remote Link tests > Pull"
# Pull
contract pull -f remote_test2.contract

echo "Remote Link tests > Push"
# Push
contract commit -f remote_test2.contract --post /welcome.text "back"
contract push -f remote_test2.contract

echo "Remote Link tests > Log"
# Log linked
contract log -f remote_test2.contract --linked

assert_line_count "$(contract log -f remote_test2.contract --linked)" 13

echo "Stop Docker"
# Stop docker
$DOCKER_WITH_SSH_DIR/scripts/docker/stop

# Cleanup
after_test $TEST_DIR