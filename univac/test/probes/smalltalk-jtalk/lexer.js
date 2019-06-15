//@ts-nocheck
var lexer = (function() {
  var TokenType = { Name: 1, String: 2, Integer: 3, Real: 4, Keyword: 5, Symbol: 6, Punctuation: 7, Sign: 8, Character: 9, Parameter: 10, Code: 11, Comment: 12 };

  var punctuations = "(),.|![]{};";

  function Lexer(text) {
      var length = text ? text.length : 0;
      var position = 0;
      var lasttoken = null;
      
      this.nextToken = function () {
          if (lasttoken != null) {
              var value = lasttoken;
              lasttoken = null;
              return value;
          }
          
          while (position < length) {
              var ch = text[position];
              
              if (isWhiteSpace(ch)) {
                  position++;
                  continue;
              }
                  
              if (ch === '"') {
                  position++;
                  return  nextComment();
                  
                  // if (comment.value && comment.value.substring(0, 3) === 'js:')
                  //     return { position, value: comment.value.substring(3), type: TokenType.Code };
                      
                  continue;
              }
              
              break;
          }
              
          if (position >= length)
              return null;
              
          position++;
          
          if (isDigit(ch))
              return nextInteger(ch);
              
          if (ch === '-' && isDigit(text[position]))
              return nextInteger(ch);
              
          if (isPunctuation(ch))
              return { position, value: ch, type: TokenType.Punctuation };
              
          if (ch === '#' && text[position] === '(') {
              position++;
              return { position, value: '#(', type: TokenType.Punctuation };
          }
          
          if (ch === '#')
              return nextSymbol();
          
          if (ch === "'")
              return nextString();
              
          if (ch === "$")
              return nextCharacter();
              
          if (ch === "^")
              return { position, value: '^', type: TokenType.Sign };
              
          if (ch === ':' && isLetter(text[position]))
              return nextParameter();
          
          if (isLetter(ch))
              return nextName(ch);
          
          var result = ch;
          
          while (position < length && isSign(text[position]))
              result += text[position++];
              
          return { position, value: result, type: TokenType.Sign };
      };
      
      this.pushToken = function (token) {
          lasttoken = token;
      }
      
      function skipComment() {
          while (position < length && text[position] !== '"')
              position++;
              
          position++;
      }
      
      function nextName(ch) {
          var result = ch;
          
  while (position < length && !isWhiteSpace(text[position]) && !isPunctuation(text[position]) && (text[position] === ':' || !isSign(text[position]))) {
              var ch2 = text[position++];
              result += ch2;
              
              if (ch2 === ':')
                  break;
          }

          if (result[result.length - 1] == ':')
              return { position, value: result, type: TokenType.Keyword };
          
          return { position, value: result, type: TokenType.Name };
      }
      
      function nextParameter() {
          var tokname = nextName('');
          
          return { position, value: tokname.value, type: TokenType.Parameter };
      }
          
      function nextCharacter()
      {
          var next = text[position++];
              
          return {position,  value : next, type: TokenType.Character };
      }
      
      function nextInteger(ch) {
          var result = ch;
          
          while (position < length && isDigit(text[position]))
              result += text[position++];
              
          if (text[position] === '.' && isDigit(text[position + 1])) {
              position++;
              return nextReal(result + '.');
          }
              
          return { position, value: result, type: TokenType.Integer, position };
      }
      
      function nextReal(result) {
          while (position < length && isDigit(text[position]))
              result += text[position++];
              
          return { position, value: result, type: TokenType.Real };
      }
      
      function nextSymbol() {
          var result = '';
          
          while (position < length && !isWhiteSpace(text[position]) && !isPunctuation(text[position]))
              result += text[position++];
          
          return { position, value: result, type: TokenType.Symbol };
      }
      
      function nextString() {
          var result = '';
          
          while (position < length) {
              if (text[position] === "'") {
                  if (text[position + 1] !== "'")
                      break;
                      
                  position++;
              }
                      
              result += text[position++];
          }

          if (text[position] != "'")
              throw 'unclosed string';
              
          position++;
          
          return { position, value: result, type: TokenType.String };
      }
      
      function nextComment() {
          var result = '';
          
          while (position < length) {
              if (text[position] === '"') {
                  if (text[position + 1] !== '"')
                      break;
                      
                  position++;
              }
                      
              result += text[position++];
          }

          if (text[position] !== '"')
              throw 'unclosed comment at '+position;
              
          position++;
          
          return { position, value: result, type: TokenType.Comment };
      }
  }

  function isPunctuation(ch) {
      return punctuations.indexOf(ch) >= 0;
  }

  function isWhiteSpace(ch) {
      return ch <= ' ';
  }

  function isSign(ch) {
      return !isWhiteSpace(ch) && !isPunctuation(ch) && !isDigit(ch) && !isLetter(ch);
  }

  function isLetter(ch) {
      return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
  }

  function isDigit(ch) {
      return ch >= '0' && ch <= '9';
  }

  function createLexer(text) {
      return new Lexer(text);
  }

  return {
      createLexer: createLexer,
      TokenType: TokenType
  }
})();

// if (typeof module !== 'undefined' && module && module.exports)
  module.exports = lexer;