#!/bin/bash

TEST_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

source ../setup.sh
set -e

before_test $TEST_DIR

cd $TEST_DIR/tmp

echo "This is some text" >> temp.txt 
contract gen_keypair >> key.keypair

true