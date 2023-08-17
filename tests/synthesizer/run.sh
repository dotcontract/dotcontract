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
  -m "no posting to /restricted" \
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
  -m "no posting to /restricted" \
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

# after_test $TEST_DIR
