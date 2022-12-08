#!/bin/sh

SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}") 

cd ${SCRIPT_DIR}/src/

antlr -Dlanguage=JavaScript PropositionalFormula.g4 -o ../build -visitor

antlr -Dlanguage=JavaScript ModalFormula.g4 -o ../build -visitor