grammar CSub;

prog
  : instruccion+ EOF
  ;

instruccion
  : bucle
  | salida
  | terminar
  ;

bucle
  : DO LBRACE sentencias RBRACE WHILE LPAREN condicion RPAREN SEMI
  ;

sentencias
  : instruccion*
  ;

salida
  : PUTS LPAREN cadena RPAREN SEMI
  ;

terminar
  : BREAK SEMI
  ;

condicion
  : '0'
  | '1'
  ;

cadena
  : STRING
  ;


LBRACE : '{' ;
RBRACE : '}' ;
LPAREN : '(' ;
RPAREN : ')' ;
SEMI   : ';' ;
DO: 'do';
WHILE: 'while';
PUTS: 'puts';
BREAK: 'break';

STRING : '"' (~["\\])* '"' ;

WS : [ \t\r\n]+ -> skip ;
