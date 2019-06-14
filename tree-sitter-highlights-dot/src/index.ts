import {renderDot } from 'render-dot'
import {RemoveProperties, PropertyOptional } from 'misc-utils-of-mine-generic'
import { writeFileSync } from 'fs';

interface GrammarNode {
  type: 'SEQ'|'STRING'|'CHOICE'|'SYMBOL'
  members?: GrammarNode[]
  value?: string
  name?: string
  id: string
}
// interface Node  {
//   text?: string
//   // label: string,
//   // attrs: {}
//   id: string,
// }

// for "choice" use this: , shape=record, fixedsize=false, peripheries=1  for the parent
// and this for thie lines: 
// s1307:p0 -> s1306
// s1307:p1 -> s1308

let counter = 1


export function buildGraph(n: PropertyOptional<GrammarNode, 'id'>, parent?:GrammarNode, output: string[] = []){
  setId(n);
  if(n.type==='SEQ'){
    output.push(`${n.id} [ label="${n.id}\n&rarr; SEQ"];`);
    (n.members||[]).forEach((c, i, a)=>{
      const previous = i>0 ? a[i-1] : n
      setId(c)
      setId(previous)
      output.push(`${previous.id} -> ${c.id} [];`);
      buildGraph(c, n as any,  output)
    })
  }
  else if(n.type==='CHOICE'){
    output.push(`${n.id} [label="{${n.id}\n&rarr; CHOICE|{${(n.members||[]).map((m, i)=>`<p${i}>`).join('|')}}}", shape=record, fixedsize=false, peripheries=1];`);
    (n.members||[]).forEach((c, i, a)=>{
      setId(c)
      buildGraph(c, n as any, output)
      output.push(`${n.id}:p${i} -> ${c.id} [label="${getEdgeLabel(n as GrammarNode, c)}"];`);
    })
  }
  else if (n.value){
    output.push(`${n.id} [label="${n.id}\n${n.value}"];`);
  }
  else if (n.type==='SYMBOL'){
    output.push(`${n.id} [label="${n.id}\n${n.name}"];`);
  }
  return output
}
function setId(n: PropertyOptional<GrammarNode, "id">) {
  n.id = n.id || ((counter++) + '').padStart(3, '0')
}

function getEdgeLabel(n: GrammarNode, c: GrammarNode) {
  return c.value||c.name||''
}
async function test() {
const grammar = {
    "type": "SEQ",
    "members": [
      {
        "type": "STRING",
        "value": "import"
      },
      {
        "type": "CHOICE",
        "members": [
          {
            "type": "SEQ",
            "members": [
              {
                "type": "SYMBOL",
                "name": "import_clause"
              },
              {
                "type": "SYMBOL",
                "name": "_from_clause"
              }
            ]
          },
          {
            "type": "SYMBOL",
            "name": "string"
          }
        ] 
      },
      {
        "type": "SYMBOL",
        "name": "_semicolon"
      }
    ]
  } as GrammarNode

  const result: string[] =[]
   buildGraph(grammar, undefined, result)
  const input = `
digraph ATN {

rankdir=LR;

${result.join('\n')}

}
  `
  console.log(input);
  const svg = await renderDot({input  })
  // console.log(svg);
  writeFileSync('tmp.svg', svg)
}
test()



// export function buildGraph(name: string, n: PropertyOptional<GrammarNode, 'id'>, output: GraphNode[] = []){
//   n.id=n.id || (counter++)+''
//   output.push({
//     id: n.id,
//     attrs: {}, // TODO: attrs according to type
//     label: n.id,
//     // children: []
//   })
//   if(n.type==='SEQ'){
//     (n.members||[]).forEach((c, i, a)=>{
//       const previous = i>0 ? a[i-1] : n
//       c.id=c.id || (counter++)+''
//       output.push({label: c.id, id: c.id , attrs: {}})
//       // output.push({label: previous.id, id: c.id})
//       output.push({:  previous.id+' -> '+c.id , id: previous.id+'->'+c.id, nodes: [previous as GrammarNode, c]})
//     })
//   }
//   else if (n.value){
//     output.push({text: n.value, id: n.id, nodes: [n as GrammarNode]})
//   }
//   else if (n.type==='SYMBOL'){
//     output.push({text: n.name||n.type, id: n.id, nodes: [n as GrammarNode]})
//   }
//   return output
// }
// interface Options {
//   inputObject:H
// }

// interface Node {
  // label:string
  // id: string
// }
// interface H 
//   {
//     "states": 
//       {
//         "id": number,
//         "property_set_id": number,
//         "transitions": 
//           {
//             "type": string,
//             "named"?:boolean,
//             "text": string,
//             "state_id": number
//           }[]
//         }[],
//     "property_sets": ({"highlight": string}|{
      
//         "injection-content": {
//           "args": any[],
//           "name": string
//         },
//         "injection-includes-children": boolean,
//         "injection-language": string
      
//     })[    ]
// }
