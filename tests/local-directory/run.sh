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

# Create a dotcontract directory
contract create -d test

echo "Commit tests"
# Commit - Text
contract commit -d test -m "Commit - Text" --post /hello.text 'Welcome'

# Commit - Text file
contract commit -d test -m "Commit - Text File" --post /temp.txt ./temp.txt

# Commit - Sign
contract commit -d test -m "Commit - Sign" --post /sign.text 'Signed' --sign-with key.keypair

# Commit - Rule
#### 

# echo "Log tests"
# Log
contract log -d test --order desc
contract log -d test --order asc
contract log -d test --limit 10
contract log -d test --limit 10 --all

echo "Undo tests"
# Undo commit - last commit
contract undo -d test 

assert_line_count "$(contract log -d test)" 17

# # Undo commit - Commit hash
contract undo -d test -c d7284479a58a7c1e27e382049cf2bdc4ec529b1109690846ad562e57a8fb16b6

assert_line_count "$(contract log -d test)" 1

echo "Info test"
# Info
contract info -d test

echo "Machine test"
# Machine
contract machine -d test

echo "Pack test"
# Pack
contract pack -d test -o a.contract 

echo "Unpack test"
# Unpack
contract unpack -i a.contract -d test

echo "Local Link tests"
# Local Link Operations
contract create -d localtest1
contract create -d localtest2
contract commit -d localtest2 -m "Commit1" --post /commit1.text 'Commit1'

# Link
contract link -d localtest1 -l localtest2

# Pull
contract pull -d localtest1

# Push
contract commit -d localtest1 -m "Commit2" --post /commit2.text 'Commit2'
contract push -d localtest1

# Log linked
contract log -d localtest1

assert_line_count "$(contract log -d localtest1)" 17

## Cleanup
after_test $TEST_DIR