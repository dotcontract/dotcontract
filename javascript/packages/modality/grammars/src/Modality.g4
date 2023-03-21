grammar Modality;

expression: f = formula EOF;

formula:
	TRUE												# trueAtom
	| FALSE												# falseAtom
	| (unsignedProp (signedProp)* | (signedProp)+)						# propsAtom
	| HENCEFORTH_MUST LPAREN inner_formula = formula RPAREN (UNTIL LPAREN until_formula = formula RPAREN)? # henceforthMustFormula
	| HENCEFORTH_CAN LPAREN inner_formula = formula RPAREN (UNTIL until_formula = formula RPAREN)? # henceforthCanFormula
	| name = NAME LPAREN (arg (',' arg)*)? RPAREN	# functionAtom
	| LBOX inner = formula RBOX outer = formula					# boxFormula
	| LDIA inner = formula RDIA outer = formula					# diamondFormula
	| LFP LPAREN boundVar = formula COMMA inner = formula RPAREN	# lfpFormula
	| GFP LPAREN boundVar = formula COMMA inner = formula RPAREN	# gfpFormula
	| left = formula OR right = formula					# orFormula
	| left = formula AND right = formula				# andFormula
	| WHEN when_formula = formula ALSO also_formula = formula  # whenAlsoFormula
	| WHEN when_formula = formula NEXT next_formula = formula  # whenNextFormula
	| NOT inner = formula								# notFormula
	| LPAREN inner = formula RPAREN						# parenFormula;

unsignedProp: theProp = prop;
signedProp: (theSign = sign) WS* theProp = prop;
sign: PLUS | MINUS # sign;
prop: TRUE | FALSE | STAR | NAME # prop;

arg:
	TRUE # trueArg
	| FALSE # falseArg
	| STRING # stringArg
	| NUMBER # numberArg
	| PATH # pathArg
	;

HENCEFORTH_MUST: 'henceforth_must';
HENCEFORTH_CAN: 'henceforth_can';
UNTIL: 'until';

TRUE: 'true';
FALSE: 'false';
AND: 'and';
OR: 'or';
NOT: 'not';
WHEN: 'when';
ALSO: 'also';
NEXT: 'next';

LBOX: '[';
RBOX: ']';
LDIA: '<';
RDIA: '>';
LPAREN: '(';
RPAREN: ')';

STAR: '*';

COMMA: ',';

PLUS: '+';
MINUS: '-';

LFP: 'lfp';
GFP: 'gfp';

NAME: [A-Za-z][A-Za-z0-9_]*;

STRING: '"' (ESC | SAFECODEPOINT)* '"';
fragment ESC: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

NUMBER: '-'? INT ('.' [0-9]+)? EXP?;
fragment INT: '0' | [1-9] [0-9]*;
fragment EXP: [Ee] [+\-]? INT;

BOUND_VAR: [@][A-Za-z0-9_]*;
PATH: [/][A-Za-z0-9_/.]*;

// whitespace
WS: [ \n\t\r]+ -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;