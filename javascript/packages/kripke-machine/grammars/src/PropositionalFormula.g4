grammar PropositionalFormula;

formula:
	TRUE									# trueAtom
	| FALSE									# falseAtom
	| prop = PROP							# propAtom
	| left = formula OR right = formula		# orFormula
	| left = formula AND right = formula	# andFormula
	| NOT inner = formula					# notFormula
	| LPAREN inner = formula RPAREN			# parenFormula;

LPAREN: '(';
RPAREN: ')';
TRUE: 'true';
FALSE: 'false';
AND: 'and';
OR: 'or';
NOT: 'not';

PROP: [A-Za-z][A-Za-z0-9_]*;

// whitespace
WS: [ \n\t\r]+ -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;