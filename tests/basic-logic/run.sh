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
  -m "no posting to /restricted" \
  --evolution ../../evolution-restricted.json \
  --rule "always( must( not( post_to(/restricted) ) ) )"
assert_line_count "$(contract log)" 9
set +e
contract commit \
  -m "bad commit" \
  --post "/restricted/1.text" "hello" &> /dev/null
test $? -eq 1 || (echo 'restriction failed' && exit 1)
set -e
contract commit \
  -m "good commit" \
  --post "/not-restricted/1.text" "hello" &> /dev/null
assert_line_count "$(contract log)" 17
cd ..

contract create -d journal
cd journal
contract commit \
  -m "must be signed" \
  --evolution ../../evolution-journal.json \
  --rule "always( must( include_sig(\"$USER1_PK\") ) )"
assert_line_count "$(contract log)" 9
contract commit \
  -m "good commit" \
  --post "/1.text" "hello" \
  --sign-with $TEST_DIR/user1.keypair
set +e
contract commit \
  -m "bad commit" \
  --post "/2.text" "hello" \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
assert_last_exit_code 1
set -e
cd ..

contract create -d agreement
cd agreement
contract commit \
  -m "require both parties to sign future commits" \
  --evolution ../../evolution-agreement.json \
  --rule "always( must( include_sig(\"$USER1_PK\") and include_sig(\"$USER2_PK\") ) )"
assert_line_count "$(contract log)" 9
contract commit \
  -m "good commit" \
  --post "/1.text" "hello" \
  --sign-with $TEST_DIR/user1.keypair \
  --sign-with $TEST_DIR/user2.keypair
set +e
contract commit \
  -m "bad commit" \
  --post "/2.text" "hello" \
  --sign-with $TEST_DIR/user1.keypair &> /dev/null
assert_last_exit_code 1
set -e
cd ..

contract create -d either_party
cd either_party
contract commit \
  -m "require either parties to sign future commits"  \
  --evolution ../../evolution-either_party.json \
  --rule "always( must( include_sig(\"$USER1_PK\")) or must( include_sig(\"$USER2_PK\") ) )"
cd ..

contract create -d either_party_fix
cd either_party_fix
contract commit \
  -m "require either parties to sign future commits"  \
  --evolution ../../evolution-journal.json \
  --rule "always( must( include_sig(\"$USER1_PK\")) or must( include_sig(\"$USER2_PK\") ) )"
set +e
contract commit \
  -m "require either parties to sign future commits"  \
  --evolution ../../evolution-either_party_fix.json \
  --post "/hello.text" "world" \
  --sign-with $TEST_DIR/user2.keypair
cd ..

#after_test $TEST_DIR
