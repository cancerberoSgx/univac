// @ts-nocheck

// adapted from LexerAdaptor.py

// const ANTLRv4Lexer= require('./ANTLRv4Lexer').ANTLRv4Lexer
var antlr4 = require('antlr4/index');

module.exports.LexerAdaptor = class LexerAdaptor extends antlr4.Lexer {

  _currentRuleType = antlr4.Token.INVALID_TYPE;

  // constructor( ){
  //   //@ts-ignore
  //   super( );
  // }
  // antlr4.Lexer.__init__(self, inp, output);

  getCurrentRuleType() {
    return this._currentRuleType;
  }
  setCurrentRuleType(self, ruleType) {
    this._currentRuleType = ruleType;
  }

  handleBeginArgument() {
    if (this.inLexerRule()) {
      this.pushMode(require('./ANTLRv4Lexer').ANTLRv4Lexer.LexerCharSet);
      this.more();
    } else {
      this.pushMode(require('./ANTLRv4Lexer').ANTLRv4Lexer.Argument);
    }
  }
  handleEndArgument() {
    this.popMode();
    if (this._modeStack.length > 0) {
      this._type = require('./ANTLRv4Lexer').ANTLRv4Lexer.ARGUMENT_CONTENT;
    }
  }
  handleEndAction() {
    this.popMode();
    if (this._modeStack.length > 0) {
      this._type = require('./ANTLRv4Lexer').ANTLRv4Lexer.ACTION_CONTENT;
    }
  }
  emit() {
    if (this._type == require('./ANTLRv4Lexer').ANTLRv4Lexer.ID) {
      let firstChar = this._input.getText(this._tokenStartCharIndex, this._tokenStartCharIndex);
      if (firstChar[0].match(/[A-Z]/)) {
        this._type = require('./ANTLRv4Lexer').ANTLRv4Lexer.TOKEN_REF;
      } else {
        this._type = require('./ANTLRv4Lexer').ANTLRv4Lexer.RULE_REF;
      }
      if (this._currentRuleType == antlr4.Token.INVALID_TYPE) {

        this._currentRuleType = this._type  // set to inside lexer or parser rule
      } // if outside of rule def

    } else if (this._type == require('./ANTLRv4Lexer').ANTLRv4Lexer.SEMI) {
      this._currentRuleType = antlr4.Token.INVALID_TYPE;

    } // exit rule def
    return super.emit();
  }
  inLexerRule() {
    return this._currentRuleType == require('./ANTLRv4Lexer').ANTLRv4Lexer.TOKEN_REF;
  }
  inParserRule() { // not used, but added for clarity
    return this._currentRuleType == require('./ANTLRv4Lexer').ANTLRv4Lexer.RULE_REF;
  }
}

