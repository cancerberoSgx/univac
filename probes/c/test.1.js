// var antlr4 = require('antlr4');
//    var MyGrammarLexer = require('./CLexer').CLexer;
//    var MyGrammarParser = require('./CParser').CParser;
//    var MyGrammarListener = require('./CListener').CListener;

//    var input = `
// int main()
// {
//     int i, sum = 0;  
//     for ( i = 1; i <= LAST; i++ ) {
//       sum += i;
//     } /*-for-*/
//     printf("sum = %d\\n", sum);
//     return 0;
// }

//    `
//    var chars = new antlr4.InputStream(input);
//    var lexer = new MyGrammarLexer(chars);
//    var tokens  = new antlr4.CommonTokenStream(lexer);
//    var parser = new MyGrammarParser(tokens);
//   //  parser.buildParseTrees = true;
//   // //  parser.query()
//    var tree = parser.compilationUnit();

// let n = {
//   children: []
// }

// class Visitor {
//   visitChildren(ctx) {
//     if (!ctx) {
//       return;
//     }
//     let  node = this.getNode(ctx)
//     n.children.push(node)
//     // n = mode
//     // this.parentNode = node
// // console.log('seba')
// // debugger
//     if (ctx.children) {
//       // let parent = node
//       return   ctx.children.map(child => {
//         if (child.children && child.children.length != 0) {
//           let c = this.getNode(child)
//           node.children.push(c)
//           const result =   child.accept(this)
//           // node = parent
//           return result
//         } else {
//           return child.getText();
//         }  
//       })
//       return node.children
//     }
//     // console.log(node);
//     return node
//   }

//   getNode(ctx) {
//     debugger
//     return {
//       type: ctx.parser.ruleNames[ctx.ruleIndex] || ctx.constructor.name,
//       start: getLocation(ctx.start),
//       stop: getLocation(ctx.stop),
//       exception: ctx.exception,
//       invokingState: ctx.invokingState,
//       children: []
//     };
//   }
// }
// function getLocation(start) {
//   const source = start.source.find(e => typeof e.strdata === 'string')
//   return {
//     type: start.type,
//     channel: start.channel,
//     start: start.start,
//     stop: start.stop,
//     tokenIndex: start.tokenIndex,
//     line: start.line,
//     column: start.column,
//     text: start.text,
//     source: source && source.strdata
//   }
// }

// const a = tree.accept(new Visitor());
// // console.log(JSON.stringify(n, null, 2))
// require('fs').writeFileSync('test.json', JSON.stringify(n, null, 2))


// //   //  console.log(tree.getText(),    antlr4 .tree.Trees.toStringTree (tree).toString(parser.ruleNames));


// // //    var MyGrammarListener = function(ParseTreeListener) {
// // //     // some code here
// // // }
// // // // some code here

// // // continue inheriting default listener
// // MyGrammarListener.prototype.enterKey = function(ctx) {
// //   console.log('enterKey')
// //   };
// //   MyGrammarListener.prototype.exitKey = function(ctx) {
// //     console.log('exitKey')
  
// //   };
// //   MyGrammarListener.prototype.enterValue = function(ctx) {
// //   console.log('enterValue')
  
// //   };
// //   MyGrammarListener.prototype.exitValue = function(ctx) {
// //   console.log('exitValue')
  
// //   };
// //   var KeyPrinter = function() {
// //     MyGrammarListener.call(this); // inherit default listener
// //     return this;
// //   };

// // KeyPrinter.prototype = Object.create(MyGrammarListener.prototype);
// // KeyPrinter.prototype.constructor = KeyPrinter;

// // // override default listener behavior
// // KeyPrinter.prototype.exitKey = function(ctx) {
// //   console.log("Oh, a key!");
// // };

// // var printer = new KeyPrinter();
// // antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);


// //   //  var tree = parser.query();
// // // const a =   antlr4.tree.ParseTreeWalker.DEFAULT.walk(new MyGrammarListener(), tree);
// // // console.log(a);

// // // tree.accept(MyGrammarListener)
// // // var printer = new KeyPrinter();
// // // antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
// // // const stringify = require('string.ify')

// // //   function replacer(key, value) {
// // //     // let b = false
// // //     // try {
// // //     //   JSON.stringify(value)
// // //     // } catch (error) {
// // //     //   b = true
// // //     // }
// // //     // return b ? undefined : value
// // //     // Filtrando propiedades 
// // //     // if (typeof value === "string") {
// // //       // return undefined;
// // //     // }
// // //     // return value;

// // //     const a = ['text', 'type', 'children']
// // //     if( !key || typeof key!=='string' || parseInt(key)!==NaN|| a.includes(key)){
// // //       return value
// // //     }else {
// // //       console.log('onit', key);
// // //       return undefined
// // //     }
// // //     // return ? value : undefined
// // //   }

  
// // //    console.log(JSON.stringify(tree, replacer));
// // //    debugger