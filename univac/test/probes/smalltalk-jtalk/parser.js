//@ts-nocheck
// if (typeof require != 'undefined')
var lexer = require('./lexer');
function Value(v){
  return {
    type: 'Value', 
    text: v,
    children: []
  }
}
function Name(v){
  return {
    type: 'Name', 
    text: v,
    children: []
  }
}
var parser = (function () {
  var createLexer = lexer.createLexer;
  var TokenType = lexer.TokenType;

  function ConstantExpression(value, position) {
      this.type = arguments.callee.name
      this.position = position
      this.children = [Value(value)].filter(e=>e &&typeof  e.type ==='string')
    }

  function VariableExpression(name, position) {
    this.type = arguments.callee.name
    this.position = position
    this.children = [Name(name)].filter(e=>e &&typeof  e.type ==='string')
  }

  function GlobalVariableExpression(name, position) {
    this.type = arguments.callee.name
    this.position = position
    this.children = [Name(name)].filter(e=>e &&typeof  e.type ==='string')
  }

  function InstanceVariableExpression(name, position) {
    this.position = position    
    this.type = arguments.callee.name
    this.children = [Name(name)].filter(e=>e &&typeof  e.type ==='string')
  }

  function AssignExpression(leftexpr, expr, position) {
    this.type = arguments.callee.name
    this.position = position
    this.children = [leftexpr, expr].filter(e=>e &&typeof  e.type ==='string')
  }

  function LocalVariablesExpression(names, position) {
    this.type = arguments.callee.name
    this.position = position
    this.children = names.map(Name).filter(e=>e &&typeof  e.type ==='string')
  }

  function UnaryMessageExpression(expr, selector, position) {
    this.type = arguments.callee.name
    this.position = position
    this.children = [...Array.isArray(expr) ? expr : [expr], Name(selector)].filter(e=>e &&typeof  e.type ==='string')
  }

  function BinaryMessageExpression(left, selector, right, position) {
    this.type = arguments.callee.name
    this.position = position
    this.children = [left, Name(selector), right].filter(e=>e &&typeof  e.type ==='string')
  }

  function KeywordMessageExpression(target, selector, expressions, position) {
    this.type = arguments.callee.name
    this.position = position
    this.children = [target, Name(selector), ...expressions].filter(e=>e &&typeof  e.type ==='string')
  }

  function Parser(text) {
      var lexer = createLexer(text);
      var tokens = [];
      
      this.parse = function(context) {
          var token = nextToken();
          
          if (token == null)
              return null;
              
          if (token.type === TokenType.Punctuation && token.value === '|')
              return parseLocalVariables(context);
              
          pushToken(token);
              
          var expr = parseTarget(context);
          
          if (token.type === TokenType.Name) {
              var token2 = nextToken();
              if (token2 && token2.value == ':=' && token2.type === TokenType.Sign)
                  return new AssignExpression(expr, this.parse(), token.position);
              else
                  pushToken(token2);
          }

          return parseKeywordMessages(expr, context);
      }
      
      function parseLocalVariables(context)
      {
          var names = [];
          let position
          var token
          for (token = nextToken(); token && token.type === TokenType.Name; token = nextToken()) {
              position = typeof position==='undefined' ? token.position : position
              var name = token.value;
              context.defineLocalVariable(name);
              names.push(name);
          }
              
          return new LocalVariablesExpression(names, position);
      }
      
      function parseTarget(context) {
          var token = nextToken();
          
          if (token.type === TokenType.String)
              return new ConstantExpression("'" + token.value + "'", token.position);
              
          if (token.type === TokenType.Name) {
              if (!context)
                  return new VariableExpression(token.value, token.position);
                  
              if (context.isInstanceVariable(token.value))
                  return new InstanceVariableExpression(token.value, token.position);
                  
              if (context.isLocalVariable(token.value) || context.isArgumentVariable(token.value))
                  return new VariableExpression(token.value, token.position);
                  
              return new GlobalVariableExpression(token.value, token.position);
          }
              
          return new ConstantExpression(token.value), token.position;
      }
      
      function parseKeywordMessages(expr) {
          expr = parseBinaryMessages(expr);
          var selector = '';
          var exprs = [];
          let position
          
          for (var token = nextToken(); token && token.type == TokenType.Keyword; token = nextToken()) {
              position = typeof position==='undefined' ? token.position : position
              selector += token.value;
              var target = parseTarget();
              exprs.push(parseBinaryMessages(target));
          }
          
          pushToken(token);
          
          if (exprs.length > 0)
              return new KeywordMessageExpression(expr, selector, exprs, position);
          
          return expr;
      }
      
      function parseBinaryMessages(expr) {
          expr = parseUnaryMessages(expr);
          let position
          for (var token = nextToken(); token && token.type == TokenType.Sign; token = nextToken()) {
              var target = parseTarget();
              var right = parseUnaryMessages(target);
              position = typeof position==='undefined' ? token.position : position
              
              expr = new BinaryMessageExpression(expr, token.value, right,position);
          }
          
          pushToken(token);
          
          return expr;
      }
      
      function parseUnaryMessages(expr) {
        let position
          for (var token = nextToken(); token && token.type === TokenType.Name; token = nextToken()){
            position = typeof position==='undefined' ? token.position : position
              expr = new UnaryMessageExpression(expr, token.value, position);
              }
          pushToken(token);
              
          return expr;
      }
      
      function nextToken() {
          if (tokens.length)
              return tokens.pop();
              
          return lexer.nextToken();
      }
      
      function pushToken(token) {
          if (token)
              tokens.push(token);
      }
  }

  function createParser(text) {
      return new Parser(text);
  }

  return {
      createParser: createParser
  }
})();

if (typeof module !== 'undefined' && module && module.exports)
  module.exports = parser;