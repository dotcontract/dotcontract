#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh
rm -rf pulltest
rm -rf pulltest2

set -x

comment 'Create a "target" DotContract Directory'
contract create --dir pulltest

comment 'Create a "source" DotContract Directory'
contract create --dir pulltest2

comment 'Link the "source" DotContract Directory to the "target" DotContract Directory'
contract link --dir pulltest --path pulltest2

comment 'Add some commits to the contracts'
contract commit --dir pulltest --post /hello.text "Welcome"
contract commit --dir pulltest2 --post /hello.text "Welcome"
contract commit --dir pulltest --post /bye.text "See you later" 
contract commit --dir pulltest2 --post /cya.text "See you when I see you"

comment 'Pull the commits from the "source" DotContract Directory to the "target" DotContract Directory'
contract pull --dir pulltest

comment 'Check log to see rebased "source" DotContract Directory'
contract log --dir pulltest
