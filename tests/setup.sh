if [ -n "$DOTCONTRACT_CLI_BIN_DIR" ]; then
    export PATH=$DOTCONTRACT_CLI_BIN_DIR:$PATH
fi

TESTS_DIR=$(dirname "${BASH_SOURCE[0]}") 
FIXTURES_DIR=$TEST_DIR/fixtures

assert_line_count() {
    if [[ "$(expr $(echo "$1" | wc -l))" == $2 ]]; then
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