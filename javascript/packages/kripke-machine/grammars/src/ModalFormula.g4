grammar ModalFormula;

formula: f = subformula EOF;

subformula:
	TRUE																# trueAtom
	| FALSE																# falseAtom
	| BOUND_VAR															# boundVar
	| (unsignedProp (signedProp)* | (signedProp)+)						# propsAtom
	| LBOX inner = subformula RBOX outer = subformula					# boxFormula
	| LDIA inner = subformula RDIA outer = subformula					# diamondFormula
	| LFP LPAREN boundVar = subformula COMMA inner = subformula RPAREN	# lfpFormula
	| GFP LPAREN boundVar = subformula COMMA inner = subformula RPAREN	# gfpFormula
	| left = subformula OR right = subformula							# orFormula
	| left = subformula AND right = subformula							# andFormula
	| NOT inner = subformula											# notFormula
	| LPAREN inner = subformula RPAREN									# parenFormula;

unsignedProp: theProp = prop;
signedProp: (theSign = sign) WS* theProp = prop;
sign: PLUS | MINUS # sign;
prop: TRUE | FALSE | STAR | NAME # prop;

TRUE: 'true';
FALSE: 'false';

AND: 'and';
OR: 'or';
NOT: 'not';
STAR: '*';

COMMA: ',';

PLUS: '+';
MINUS: '-';

LBOX: '[';
RBOX: ']';
LDIA: '<';
RDIA: '>';
LPAREN: '(';
RPAREN: ')';

LFP: 'lfp';
GFP: 'gfp';

NAME: [A-Za-z][A-Za-z0-9_]*;
BOUND_VAR: [@][A-Za-z0-9_]*;

// whitespace
WS: [ \n\t\r]+ -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;