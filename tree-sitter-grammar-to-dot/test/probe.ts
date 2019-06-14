// import { renderDot } from 'render-dot';
// import { writeFileSync } from 'fs';
// import { buildDot } from '../src/buildDot';
// import { GrammarNode } from '../src/types';

// async function test() {
//   const grammar = {
//     "type": "SEQ",
//     "members": [
//       {
//         "type": "STRING",
//         "value": "import"
//       },
//       {
//         "type": "CHOICE",
//         "members": [
//           {
//             "type": "SEQ",
//             "members": [
//               {
//                 "type": "SYMBOL",
//                 "name": "import_clause"
//               },
//               {
//                 "type": "SYMBOL",
//                 "name": "_from_clause"
//               }
//             ]
//           },
//           {
//             "type": "SYMBOL",
//             "name": "string"
//           }
//         ]
//       },
//       {
//         "type": "SYMBOL",
//         "name": "_semicolon"
//       }
//     ]
//   } as GrammarNode;
//   const input = buildDot({input: grammar});
//   console.log(input);
//   const svg = await renderDot({ input });
//   // console.log(svg);
//   writeFileSync('tmp.svg', svg);
// }
// test();
