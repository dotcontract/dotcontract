#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh
rm -rf pushtest
rm -rf pushtest2

set -x

comment 'Create a "target" DotContract Directory'
contract create --dir pushtest

comment 'Create a "source" DotContract Directory'
contract create --dir pushtest2

comment 'Link the "source" DotContract Directory to the "target" DotContract Directory'
contract link --dir pushtest --path pushtest2

comment 'Add some commits to the contracts'
contract commit --dir pushtest --post /hello.text "Welcome"
contract commit --dir pushtest2 --post /hello.text "Welcome"
contract commit --dir pushtest --post /bye.text "See you later" 

comment 'Push the commits from the "target" DotContract Directory to the "source" DotContract Directory'
contract push --dir pushtest

comment 'Check log to see the updated "target" DotContract Directory'
contract log --dir pushtest2
