import * as d3 from 'd3'
import { unique } from 'misc-utils-of-mine-generic'
// )
// const types = {} as any
// visitDescendants({node: d, visitor: (n, parent)=>{
//   types[n.type] = types[n.type] || 0
//   types[n.type]++
//   // if(parent){
//   //   types[parent.type] = types[parent.type] || 0
//   //   types[parent.type]++
//   // }
//   // if(n.children.length===0){
//   //   delete n.children
//   //   return true
//   // }
//   return false
// }, childrenFirst: true})
import { ast as d } from './ast'


ff2(d)
// debugger
// console.log(d);

// const dd = {
//   children: Object.keys(types).map(type=>({children: [], type, value: types[type]}))
// }
// function ff(n:any){
//   n.children.forEach((c:any)=>{
//     ff(c)
//   })
//   types[n.type] = types[n.type] || 0
//   types[n.type]++
//   n.children.forEach((c:any)=>{
//     types[n.type]+=types[c.type]
//   })
// }


function ff2(n: any, level = 0) {
  n.value = 1
  n.children.forEach((c: any) => {
    ff2(c, level + 1)
    n.value += (c.value || 1)
  })
  delete n.start
  delete n.stop
  n.__children__ = n.children
  if (level > 5) {

    delete n.children
  } else {
    delete n.value
  }
  // n.value++
  // n.children.forEach((c:any)=>{
  // })
}

// let d2={type: '1',   children: [
//   {type: '11',  children: [
//     {type: '111', value: 2},{type: '112', value: 3},{type: '113', value: 2},{type: '114', value: 3}
//   ]},
//   {type: '12', children: [
//     {type: '121', value: 2, children: []},{type: '122', value: 3, children: []}
// ]}
// ]}

// visitDescendants({node: d, visitor: (n, parent, level=0)=>{
//   if(level>5){
//     (n as any).value = 1
//   }
//   if(n.children.length===0){
//     (n as any).value = 1
//     delete n.children
//     return true
//   }else {
//     delete (n as any).value
//   }
//   return false
// }})
// debugger
// interface Source extends d3.HierarchyNode<any> {
//   x0: number
//   y0: number
//   x: number
//   y: number
//   id: any
//   _children: any
// }

// type N = Node &{value: number}
// function countDescendants(n: Node) {
//   let counter =0
//   visitDescendants({node: n, visitor: n=>{counter++; return false}})
//   return counter
// }
// visitDescendants ({node: d, visitor: (n)=>{
//   (n as any).value = countDescendants(n) +1
//   if(n.children.length===0){
//     delete n.children
//     return true
//   }
//   return false
// }})

async function test() {
  // const data = d3.json(data2())
  // const data = await d3.json("https://raw.githubusercontent.com/d3/d3-hierarchy/v1.1.8/test/data/flare.json")

  const svg = buildTreeMap(d)
  document.body.appendChild(svg.node()!)
}

test()

function buildTreeMap(d: {}) {

  const width = 975,
    height = 560,
    format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory10)
  // let node:any,
  // x = d3.scaleLinear().range([0, width]),
  // y = d3.scaleLinear().range([0, height])


  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height] as any)
    .style("font", "10px sans-serif")



  renderNode(d)

  return svg

  function renderNode(data: any) {
    // debugger
    svg.selectAll("g").remove()

    const treemap = (data: any) =>
      d3.treemap()
        // .tile(d3[tile])
        .size([width, height])
        .padding(1)
        .round(true)
        (d3.hierarchy(data)
          .sum(d => d.value)
          .sort((a: any, b: any) => b.value - a.value))

    const root = treemap(data)

    const leaf = svg.selectAll("g")
      .data((root as any).leaves())
      .join("g")
      .attr("transform", (d: any) => `translate(${d.x0},${d.y0})`)
      .on("click", function(d: any) {

        const target = d
        const data = {
          ...target.data,
          children: target.data.__children__
        }
        data.__value__ = data.value
        delete data.value
        debugger

        renderNode(data)

      })

    leaf.append("title")
      .text((d: any) => `${d.ancestors().reverse().map((d: any) => d.data.type).join("/")}\n${format(d.value)}`)

    leaf.append("rect")
      .attr("id", (d: any) => (d.leafUid = unique("leaf") as any).id)
      .attr("fill", (d: any) => { while (d.depth > 1) d = d.parent; return color(d.data.type) })
      // .attr("fill-opacity", 0.6)
      .attr("width", (d: any) => d.x1 - d.x0)
      .attr("height", (d: any) => d.y1 - d.y0)


    leaf.append("clipPath")
      .attr("id", (d: any) => ((d.clipUid = d.clipUid || unique("clip")) as any).id)
      .append("use")
      .attr("xlink:href", (d: any) => d.leafUid.href)

    leaf.append("text")
      .attr("clip-path", (d: any) => d.clipUid)
      .selectAll("tspan")
      .data((d: any) => d.data.type.split(/(?=[A-Z][^A-Z])/g).concat(format(d.value)))
      .join("tspan")
      .attr("x", 3)
      .attr("y", (d, i, nodes) => `${((i === nodes.length - 1) as any) * 0.3 + 1.1 + i * 0.9}em`)
      .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
      .text((d: any) => d)


  }
  // function zoom(d:any) {
  //   renderNode(d.data)
  //   d3.event.stopPropagation();
  // }

}
//   // return svg;
// }

