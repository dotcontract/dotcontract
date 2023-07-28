#!/usr/bin/env bash

SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}") 

cd ${SCRIPT_DIR}/ && antlr -Dlanguage=JavaScript ../../../../grammars/ModalFormula.g4 -o ./build -Xexact-output-dir -visitor
