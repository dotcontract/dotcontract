#!/bin/sh

SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}") 

cd ${SCRIPT_DIR}/src/ && antlr -Dlanguage=JavaScript Modality.g4 -o ../build -visitor