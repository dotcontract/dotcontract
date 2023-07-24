#!/bin/bash

TEST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

source ../setup.sh
set -e

before_test $TEST_DIR

cd $TEST_DIR/tmp

USER1_PK=$(contract pubkey -f ../user1.keypair)
USER2_PK=$(contract pubkey -f ../user2.keypair)

contract create -d trivial
cd trivial
contract commit \
  -m "trivial rule" \
  --evolution ../../evolution-looper.json \
  --rule "always( can( true ) ) and always( must( true ) )"
assert_line_count "$(contract log)" 9
cd ..

contract create -d restricted
cd restricted
contract commit \
  -m "not posting to /restricted" \
  --evolution ../../evolution-restricted.json \
  --rule "always( must( not( post_to(/restricted) ) ) )"
assert_line_count "$(contract log)" 9
cd ..

contract create -d journal
cd journal
contract commit \
  -m "must be signed" \
  --evolution ../../evolution-journal.json \
  --rule "always( must( include_sig(\"$USER1_PK\") ) )"
assert_line_count "$(contract log)" 9
cd ..

contract create -d agreement
cd agreement
contract commit \
  -m "require both parties to sign future commits" \
  --evolution ../../evolution-agreement.json \
  --rule "always( must( include_sig(\"$USER1_PK\") or include_sig(\"$USER2_PK\") ) )"
assert_line_count "$(contract log)" 9
cd ..

after_test $TEST_DIR
