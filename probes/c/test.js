


function getAst(config){

  const input = config.input

  var antlr4 = require('antlr4');
   var MyGrammarLexer = require('./grammar/CLexer').CLexer;
   var MyGrammarParser = require('./grammar/CParser').CParser;
   var MyGrammarListener = require('./grammar/CListener').CListener;

   var chars = new antlr4.InputStream(input);
   var lexer = new MyGrammarLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new MyGrammarParser(tokens);
  //  parser.buildParseTrees = true;
  // //  parser.query()
   var tree = parser.compilationUnit();

let n = {
  children: []
}

class Visitor {
  visitChildren(ctx) {
  if (!ctx) {
      return;
    }
    let  node = this.getNode(ctx)
    n.children.push(node)
    // n = mode
    // this.parentNode = node
// console.log('seba')
// debugger
    if (ctx.children) {
      let previous = n
      n = node
      const result=   ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          let c = this.getNode(child)
          // n.children.push(c)
          const result =   child.accept(this)
          // node = parent
          return result
        } else {
          return child.getText();
        }  
      })
      n=previous
      return result
      // return node.children
    }
    // console.log(node);
    return node
  }

  getNode(ctx) {
    // debugger
    return {
      type: ctx.parser.ruleNames[ctx.ruleIndex] || ctx.constructor.name,
      start: getLocation(ctx.start),
      stop: getLocation(ctx.stop),
      // exception: ctx.exception,
      // invokingState: ctx.invokingState,
      children: []
    };
  }
}
function getLocation(start) {
  const source = start.source.find(e => typeof e.strdata === 'string')
  return {
    // token: start.getTokenSource().text,
    type: start.type,
    // channel: start.channel,
    start: start.start,
    stop: start.stop,
    // tokenIndex: start.tokenIndex,
    line: start.line,
    column: start.column,
    text: start.text,
    source: config.includeSource && source && source.strdata
  }
}

const a = tree.accept(new Visitor());
return n.children[0]
}



function test1(){
  var input = `
int main()
{
  return 0;
}
  `  
  require('fs').writeFileSync('test.json', JSON.stringify(getAst({input}), null, 2))
}

test1()
