#!/bin/bash

TEST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

source ../setup.sh
set -e

before_test $TEST_DIR

cd $TEST_DIR/tmp

USER1_PK=$(contract pubkey -f ../user1.keypair)
contract gen_keypair >>user2.keypair
USER2_PK=$(contract pubkey -f ../user2.keypair)

contract create -d trivial
cd trivial
contract commit -m "trivial rule" --rule "always(can(true))" --evolution ../../evolution-looper.json
assert_line_count "$(contract log)" 9
cd ..

# contract create -d journal
# cd journal
# contract commit -m "must be self signed" --rule "always (must (include_sig($USER1_PK))))" --evolution ../../evolution-looper.json

# contract commit -m "require both parties to sign future commits" --rule "always (must (include_sig($USER1_PK) or include_sig($USER2_PK)))" --evolution ../../evolution-looper.json

# after_test $TEST_DIR
