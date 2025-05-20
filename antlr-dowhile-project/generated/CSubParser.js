// Generated from c:/Proyectos/51948/antlr-dowhile-project/CSub.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CSubListener from './CSubListener.js';
import CSubVisitor from './CSubVisitor.js';

const serializedATN = [4,1,13,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,5,3,40,8,3,10,3,12,
3,43,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,
2,4,6,8,10,12,14,0,1,1,0,1,2,53,0,17,1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,6,
41,1,0,0,0,8,44,1,0,0,0,10,50,1,0,0,0,12,53,1,0,0,0,14,55,1,0,0,0,16,18,
3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,
0,0,0,21,22,5,0,0,1,22,1,1,0,0,0,23,27,3,4,2,0,24,27,3,8,4,0,25,27,3,10,
5,0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,3,1,0,0,0,28,29,5,8,0,0,
29,30,5,3,0,0,30,31,3,6,3,0,31,32,5,4,0,0,32,33,5,9,0,0,33,34,5,5,0,0,34,
35,3,12,6,0,35,36,5,6,0,0,36,37,5,7,0,0,37,5,1,0,0,0,38,40,3,2,1,0,39,38,
1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,7,1,0,0,0,43,41,1,0,
0,0,44,45,5,10,0,0,45,46,5,5,0,0,46,47,3,14,7,0,47,48,5,6,0,0,48,49,5,7,
0,0,49,9,1,0,0,0,50,51,5,11,0,0,51,52,5,7,0,0,52,11,1,0,0,0,53,54,7,0,0,
0,54,13,1,0,0,0,55,56,5,12,0,0,56,15,1,0,0,0,3,19,26,41];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CSubParser extends antlr4.Parser {

    static grammarFileName = "CSub.g4";
    static literalNames = [ null, "'0'", "'1'", "'{'", "'}'", "'('", "')'", 
                            "';'", "'do'", "'while'", "'puts'", "'break'" ];
    static symbolicNames = [ null, null, null, "LBRACE", "RBRACE", "LPAREN", 
                             "RPAREN", "SEMI", "DO", "WHILE", "PUTS", "BREAK", 
                             "STRING", "WS" ];
    static ruleNames = [ "prog", "instruccion", "bucle", "sentencias", "salida", 
                         "terminar", "condicion", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CSubParser.ruleNames;
        this.literalNames = CSubParser.literalNames;
        this.symbolicNames = CSubParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CSubParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.instruccion();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3328) !== 0));
	        this.state = 21;
	        this.match(CSubParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CSubParser.RULE_instruccion);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.bucle();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.salida();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CSubParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(CSubParser.DO);
	        this.state = 29;
	        this.match(CSubParser.LBRACE);
	        this.state = 30;
	        this.sentencias();
	        this.state = 31;
	        this.match(CSubParser.RBRACE);
	        this.state = 32;
	        this.match(CSubParser.WHILE);
	        this.state = 33;
	        this.match(CSubParser.LPAREN);
	        this.state = 34;
	        this.condicion();
	        this.state = 35;
	        this.match(CSubParser.RPAREN);
	        this.state = 36;
	        this.match(CSubParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencias() {
	    let localctx = new SentenciasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CSubParser.RULE_sentencias);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3328) !== 0)) {
	            this.state = 38;
	            this.instruccion();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CSubParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(CSubParser.PUTS);
	        this.state = 45;
	        this.match(CSubParser.LPAREN);
	        this.state = 46;
	        this.cadena();
	        this.state = 47;
	        this.match(CSubParser.RPAREN);
	        this.state = 48;
	        this.match(CSubParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CSubParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(CSubParser.BREAK);
	        this.state = 51;
	        this.match(CSubParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CSubParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CSubParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(CSubParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CSubParser.EOF = antlr4.Token.EOF;
CSubParser.T__0 = 1;
CSubParser.T__1 = 2;
CSubParser.LBRACE = 3;
CSubParser.RBRACE = 4;
CSubParser.LPAREN = 5;
CSubParser.RPAREN = 6;
CSubParser.SEMI = 7;
CSubParser.DO = 8;
CSubParser.WHILE = 9;
CSubParser.PUTS = 10;
CSubParser.BREAK = 11;
CSubParser.STRING = 12;
CSubParser.WS = 13;

CSubParser.RULE_prog = 0;
CSubParser.RULE_instruccion = 1;
CSubParser.RULE_bucle = 2;
CSubParser.RULE_sentencias = 3;
CSubParser.RULE_salida = 4;
CSubParser.RULE_terminar = 5;
CSubParser.RULE_condicion = 6;
CSubParser.RULE_cadena = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(CSubParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(CSubParser.DO, 0);
	};

	LBRACE() {
	    return this.getToken(CSubParser.LBRACE, 0);
	};

	sentencias() {
	    return this.getTypedRuleContext(SentenciasContext,0);
	};

	RBRACE() {
	    return this.getToken(CSubParser.RBRACE, 0);
	};

	WHILE() {
	    return this.getToken(CSubParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(CSubParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_sentencias;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterSentencias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitSentencias(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitSentencias(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(CSubParser.PUTS, 0);
	};

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(CSubParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(CSubParser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(CSubParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_cadena;
    }

	STRING() {
	    return this.getToken(CSubParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CSubParser.ProgContext = ProgContext; 
CSubParser.InstruccionContext = InstruccionContext; 
CSubParser.BucleContext = BucleContext; 
CSubParser.SentenciasContext = SentenciasContext; 
CSubParser.SalidaContext = SalidaContext; 
CSubParser.TerminarContext = TerminarContext; 
CSubParser.CondicionContext = CondicionContext; 
CSubParser.CadenaContext = CadenaContext; 
