#!/usr/bin/env bash

SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}") 

cd ${SCRIPT_DIR}/src/

antlr -Dlanguage=JavaScript ModalFormula.g4 -o ../build -visitor
