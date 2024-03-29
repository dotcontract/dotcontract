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
assert_line_count "$(contract machine)" 23
contract commit \
  -m "must be signed" \
  --rule "always( must( include_sig(\"$USER1_PK\") ) )"
assert_line_count "$(contract machine)" 34
contract commit \
  -m "good commit" \
  --post "/1.text" "hello" \
  --sign-with $TEST_DIR/user1.keypair
set +e
contract commit \
  -m "bad commit" \
  --post "/2.text" "hello" \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
exit_code=$?
set -e
test $exit_code -eq 1 || (echo 'exit code wrong' && exit 1)
cd ..

contract create -d restricted
cd restricted
assert_line_count "$(contract machine)" 23
contract commit \
  -m "no posting to /restricted and User1 always signs" \
  --rule "always( must( not( post_to(/restricted) ) ) ) and always ( must( include_sig(\"$USER1_PK\") ) )"
assert_line_count "$(contract machine)" 34
set +e
contract commit \
  -m "bad commit" \
  --post "/restricted/1.text" "hello" &> /dev/null
exit_code=$?
set -e
test $exit_code -eq 1 || (echo 'exit code wrong' && exit 1)
contract commit \
  -m "good commit" \
  --post "/not-restricted/1.text" "hello"\
  --sign-with $TEST_DIR/user1.keypair &> /dev/null
cd ..

contract create -d super-restricted
cd super-restricted
assert_line_count "$(contract machine)" 23
contract commit \
  -m "no posting to /restricted and both User1 and User2 always sign" \
  --rule "always( must( not( post_to(/restricted) ) ) ) and always ( must( include_sig(\"$USER1_PK\") ) ) and always ( must( include_sig(\"$USER2_PK\") ) )" 
assert_line_count "$(contract machine)" 34
set +e
contract commit \
  -m "bad commit" \
  --post "/restricted/1.text" "hello" &> /dev/null
exit_code=$?
set -e
test $exit_code -eq 1 || (echo 'exit code wrong' && exit 1)

set +e
contract commit \
  -m "bad commit" \
  --post "/restricted/2.text" "hello" \
  --sign-with $TEST_DIR/user1.keypair &> /dev/null
exit_code=$?
set -e
test $exit_code -eq 1 || (echo 'exit code wrong' && exit 1)
contract commit \
  -m "good commit" \
  --post "/not-restricted/1.text" "hello"\
  --sign-with $TEST_DIR/user1.keypair \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
cd ..

contract create -d complex-contract
cd complex-contract
contract commit \
  -m "User1 or User2 can sign to become verified" \
  --evolve ../../evolution-complex.json \
  --rule "can( include_sig(\"$USER1_PK\") ) or can( include_sig(\"$USER2_PK\") )"
assert_line_count "$(contract machine)" 93
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
assert_line_count "$(contract machine)" 112
set +e
contract commit \
  -m "Bad commit: Testing commit with User2 verification and posting to restricted" \
  --post "/restricted/1.text" "hello" \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
exit_code=$?
set -e
test $exit_code -eq 1 || (echo 'exit code wrong' && exit 1)
contract commit \
  -m "Testing commit with User2 verification" \
  --post "/3.text" "hello" \
  --sign-with $TEST_DIR/user2.keypair &> /dev/null
contract commit \
  -m "Testing commit to always post to non-restricted" \
  --rule "always( must( post_to(/notrestricted) ) )"
set +e
contract commit \
  -m "Testing commit to allow posting to non-restricted" \
  --rule "always( must( not ( post_to(/notrestricted) ) ) )" \
  --post "/notrestricted/1.text" "hello" &> /dev/null
exit_code=$?
set -e
test $exit_code -eq 1 || (echo 'exit code wrong' && exit 1)
# after_test $TEST_DIR
