#!/bin/bash

TEST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

source ../setup.sh
set -e

before_test $TEST_DIR

cd $TEST_DIR/tmp

USER1_PK=$(contract pubkey -f ../user1.keypair)
USER2_PK=$(contract pubkey -f ../user2.keypair)


contract create -d test-no-evo
cd test-no-evo
contract commit \
  -m "no evolution" \
  --rule "true"
cd ..

contract create -d journal
cd journal
contract commit \
  -m "must be signed" \
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

contract create -d restricted
cd restricted
contract commit \
  -m "no posting to /restricted and User1 always signs" \
  --rule "always( must( not( post_to(/restricted) ) ) ) and always ( must( include_sig(\"$USER1_PK\") ) )"
assert_line_count "$(contract log)" 9
set +e
contract commit \
  -m "bad commit" \
  --post "/restricted/1.text" "hello" &> /dev/null
test $? -eq 1 || (echo 'restriction failed' && exit 1)
set -e
contract commit \
  -m "good commit" \
  --post "/not-restricted/1.text" "hello"\
  --sign-with $TEST_DIR/user1.keypair &> /dev/null
assert_line_count "$(contract log)" 20
cd ..

contract create -d super-restricted
cd super-restricted
contract commit \
  -m "no posting to /restricted and both User1 and User2 always sign" \
  --rule "always( must( not( post_to(/restricted) ) ) ) and always ( must( include_sig(\"$USER1_PK\") ) ) and always ( must( include_sig(\"$USER2_PK\") ) )" 
assert_line_count "$(contract log)" 9
set +e
contract commit \
  -m "bad commit" \
  --post "/restricted/1.text" "hello" &> /dev/null
test $? -eq 1 || (echo 'restriction failed' && exit 1)

contract commit \
  -m "bad commit" \
  --post "/restricted/2.text" "hello" \
  --sign-with $TEST_DIR/user1.keypair &> /dev/null
test $? -eq 1 || (echo 'restriction failed' && exit 1)
set -e
contract commit \
  -m "good commit" \
  --post "/not-restricted/1.text" "hello"\
  --sign-with $TEST_DIR/user1.keypair \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
assert_line_count "$(contract log)" 21
cd ..

contract create -d complex-contract
cd complex-contract
contract commit \
  -m "User1 or User2 can sign to become verified" \
  --evolution ../../evolution-complex.json \
  --rule "can( include_sig(\"$USER1_PK\") ) or can( include_sig(\"$USER2_PK\") )"
assert_line_count "$(contract log)" 9
contract commit \
  -m "Testing commit as unverified users" \
  --post "/1.text" "hello" &> /dev/null
contract commit \
  -m "Testing commit with User1 verification" \
  --post "/2.text" "hello" \
  --sign-with $TEST_DIR/user1.keypair &> /dev/null
contract commit \
  -m "no posting to /restricted" \
  --rule "always( must( not( post_to(/restricted) ) ) )"
set +e
contract commit \
  -m "Bad commit: Testing commit with User2 verification and posting to restricted" \
  --post "/restricted/1.text" "hello" \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
test $? -eq 1 || (echo 'restriction failed' && exit 1)
set -e
contract commit \
  -m "Testing commit with User2 verification" \
  --post "/3.text" "hello" \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
assert_line_count "$(contract log)" 47
set +e
contract commit \
  -m "Bad commit: Allowing post to restricted" \
  --rule "always ( must ( post_to(/restricted) ) )"
test $? -eq 1 || (echo 'restriction failed' && exit 1)
set -e
# after_test $TEST_DIR
