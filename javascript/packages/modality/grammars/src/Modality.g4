grammar Modality;

expression: f = formula EOF;

formula:
	TRUE												# trueAtom
	| FALSE												# falseAtom
	| prop = NAME										# propAtom
	| HENCEFORTH_MUST LPAREN inner_formula = formula RPAREN (UNTIL LPAREN until_formula = formula RPAREN)? # henceforthMustFormula
	| HENCEFORTH_CAN LPAREN inner_formula = formula RPAREN (UNTIL until_formula = formula RPAREN)? # henceforthCanFormula
	| name = NAME LPAREN (arg (',' arg)*)? RPAREN	# functionAtom
	| left = formula OR right = formula					# orFormula
	| left = formula AND right = formula				# andFormula
	| WHEN when_formula = formula ALSO also_formula = formula  # whenAlsoFormula
	| NOT inner = formula								# notFormula
	| LPAREN inner = formula RPAREN						# parenFormula;

arg:
	TRUE # trueArg
	| FALSE # falseArg
	| STRING # stringArg
	| NUMBER # numberArg
	;

HENCEFORTH_MUST: 'henceforth_must';
HENCEFORTH_CAN: 'henceforth_can';
UNTIL: 'until';
LPAREN: '(';
RPAREN: ')';
TRUE: 'true';
FALSE: 'false';
AND: 'and';
OR: 'or';
NOT: 'not';
WHEN: 'when';
ALSO: 'also';

NAME: [A-Za-z][A-Za-z0-9_]*;

STRING: '"' (ESC | SAFECODEPOINT)* '"';
fragment ESC: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

NUMBER: '-'? INT ('.' [0-9]+)? EXP?;
fragment INT: '0' | [1-9] [0-9]*;
fragment EXP: [Ee] [+\-]? INT;

// whitespace
WS: [ \n\t\r]+ -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;