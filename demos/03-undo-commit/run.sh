#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh
rm -f temp.txt
rm -rf example
rm -rf example_undo_target
echo "This is some text" >> temp.txt 

set -x

comment 'Create a DotContract Directory'
contract create --dir example

comment 'Add some commits'
contract commit --dir example -m "Commit 1" --post /temp.txt temp.txt
contract commit --dir example -m "Commit 2" --post /hello.text "Welcome"
contract commit --dir example -m "Commit 3" --post /bye.text "See you later"

comment 'Check log'
contract log --dir example

comment 'Undo last commit'
contract undo --dir example

comment 'Check new log'
contract log --dir example

comment 'Compare with another contract with all commits except the last one before the undo operation' 
contract create --dir example_undo_target
contract commit --dir example_undo_target -m "Commit 1" --post /temp.txt temp.txt
contract commit --dir example_undo_target -m "Commit 2" --post /hello.text "Welcome"
diff -qr example example_undo_target
comment 'You should see only the dotcontract.json files differing since they are different contracts'

comment 'Clean up'
rm temp.txt
rm -rf example
rm -rf example_undo_target