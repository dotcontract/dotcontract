#!/bin/bash

TEST_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

source ../setup.sh
set -e

before_test $TEST_DIR

cd $TEST_DIR/tmp

echo "This is some text" >> temp.txt 
contract gen_keypair >> key.keypair

# Tests
echo "Create test"

# Create a dotcontract file 
contract create -f test.contract

echo "Commit tests"
# Commit - Text
contract commit -f test.contract -m "Commit - Text" --post /hello.text 'Welcome'

# Commit - Text file
contract commit -f test.contract -m "Commit - Text File" --post /temp.txt ./temp.txt

# Commit - Sign
contract commit -f test.contract -m "Commit - Sign" --post /sign.text 'Signed' --sign-with key.keypair

# Commit - Rule
#### 

echo "Log tests"
# Log 

assert_line_count "$(contract log -f test.contract)" 28

contract log -f test.contract --order desc
contract log -f test.contract --order asc
contract log -f test.contract --limit 10
contract log -f test.contract --limit 10 --all

echo "Undo tests"
# Undo commit - last commit
contract undo -f test.contract 

assert_line_count "$(contract log -f test.contract)" 17

# Undo commit - Commit hash
contract undo -f test.contract -c d7284479a58a7c1e27e382049cf2bdc4ec529b1109690846ad562e57a8fb16b6

assert_line_count "$(contract log -f test.contract)" 1

echo "Info test"
# Info
contract info -f test.contract

echo "Machine test"
# Machine
contract machine -f test.contract

echo "Local Link tests"
# Local Link Operations
contract create -f localtest1.contract
contract create -f localtest2.contract
contract commit -f localtest2.contract -m "Commit1" --post /commit1.text 'Commit1'

# Link
contract link -f localtest1.contract -l localtest2.contract

# Pull
contract pull -f localtest1.contract

# Push
contract commit -f localtest1.contract -m "Commit2" --post /commit2.text 'Commit2'
contract push -f localtest1.contract

# Log linked
contract log -f localtest1.contract

assert_line_count "$(contract log -f localtest1.contract)" 17

# Cleanup
after_test $TEST_DIR