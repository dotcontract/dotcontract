if [ -n "$DOTCONTRACT_CLI_BIN_DIR" ]; then
    export PATH=$PATH:$DOTCONTRACT_CLI_BIN_DIR
fi

TESTS_DIR=$(dirname "${BASH_SOURCE[0]}") 
FIXTURES_DIR=$TEST_DIR/fixtures

assert_last_exit_code() {
  test $? -eq "$1" || (echo 'exit code wrong' && exit 1)
}

assert_line_count() {
    if [[ "$(expr $(echo "$1" | wc -l))" == $2 ]]
    then
        true
    else
        echo "linecount wrong" "$(expr $(echo "$1" | wc -l))" "!=" $2
        exit 1
    fi
}

before_test() {
    cd $1
    rm -rf tmp
    mkdir tmp
}

after_test() {
    cd $1
    rm -rf $1/tmp
}