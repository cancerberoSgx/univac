var antlr4 = require('antlr4/index');

function TestLexer(input) {
	antlr4.Lexer.call(this, input);
    // this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TestLexer.prototype = Object.create(antlr4.Lexer.prototype);
TestLexer.prototype.constructor = TestLexer;

Object.defineProperty(TestLexer.prototype, "atn", {
        get : function() {
                return null
        }
});

function TestLexer (){

}

exports.TestLexer = TestLexer