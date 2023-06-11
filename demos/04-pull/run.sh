#!/usr/bin/env bash

# prepare example
cd $(dirname -- "$0")
source ../helpers.sh
rm -rf linktest
rm -rf linktest2

set -x

comment 'Create a "target" DotContract Directory'
contract create --dir linktest

comment 'Create a "source" DotContract Directory'
contract create --dir linktest2

comment 'Link the "source" DotContract Directory to the "target" DotContract Directory'
contract link --dir linktest --path linktest2

comment 'Add some commits to the contracts'
contract commit --dir linktest --post /hello.text "Welcome"
contract commit --dir linktest2 --post /hello.text "Welcome"
contract commit --dir linktest --post /bye.text "See you later" 
contract commit --dir linktest2 --post /cya.text "See you when I see you"

comment 'Pull the commits from the "source" DotContract Directory to the "target" DotContract Directory'
contract pull --dir linktest

comment 'Check log to see rebased "source" DotContract Directory'
contract log --dir linktest
