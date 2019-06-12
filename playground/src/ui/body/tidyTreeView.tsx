import * as d3 from 'd3'
import * as React from 'react'
import { AbstractComponent } from '../component'

export class TidyTreeView extends AbstractComponent {
  render() {

    return (
      <div className="astViewD3" ref={c => c && this.addSvg(c as any)}></div>
    )
  }
  addSvg(c: HTMLElement): void {
    const svg = buildTidyTree(this.state.ast)
    const node = svg.node()

    c!.appendChild(node!)

    const svgPanZoom = require('svg-pan-zoom')
    const panZoomInstance = svgPanZoom(node, {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 0.1
    })
  }
}



interface Source extends d3.HierarchyNode<any> {
  x0: number
  y0: number
  x: number
  y: number
  id: any
  _children: any
}
function buildTidyTree(data: {}) {

  const width = window.innerWidth///2.5
  // const height = 1060
  const dx = 7, dy = width / 10
  const margin = { top: 10, right: 10, bottom: 10, left: 10 }
  const format = d3.format(",d")
  const color = d3.scaleOrdinal(d3.schemeCategory10)
  const diagonal = d3.linkHorizontal().x((d: any) => d.y).y((d: any) => d.x)
  const tree = d3.tree().nodeSize([dx, dy])
  const root = d3.hierarchy(data) as any as Source
  root.x0 = dy / 2
  root.y0 = 0
  root.descendants().forEach((d: any, i: number) => {
    d.id = i
    d._children = d.children
    // d.name = d.type || d.name
    // d.data = {name : d.type||d.data.name||d.name}
    // if (d.depth && d.data.type.length !== 7)
    //   d.children = null;
  })
  const svg = d3.create("svg")
    .attr("viewBox", [-margin.left, -margin.top, width, dx] as any)
    .style("font", dx + "px sans-serif")
    .style("user-select", "none")
  const gLink = svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
  const gNode = svg.append("g")
    .attr("cursor", "pointer")
    .attr("pointer-events", "all")
  function update(source: Source) {
    const duration = d3.event && d3.event.altKey ? 2500 : 250
    const nodes = root.descendants().reverse()
    const links = root.links()
    // Compute the new tree layout.
    tree(root)
    let left = root
    let right = root
    root.eachBefore(node => {
      if (node.x < left.x)
        left = node
      if (node.x > right.x)
        right = node
    })
    const height = right.x - left.x + margin.top + margin.bottom
    const transition = svg.transition()
      .duration(duration)
      .attr("viewBox", [-margin.left, left.x - margin.top, width, height] as any)
      .tween("resize", (window as any).ResizeObserver ? null as any : () => () => svg.dispatch("toggle"))
    // Update the nodes…
    const node = gNode.selectAll("g")
      .data(nodes, (d: any) => d.id)
    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append("g")
      .attr("transform", d => `translate(${source.y0},${source.x0})`)
      .attr("fill-opacity", 0)
      .attr("stroke-opacity", 0)
      .on("click", d => {
        d.children = d.children ? null : d._children
        update(d)
      })
    nodeEnter.append("circle")
      .attr("r", 2.5)
      .attr("fill", d => d._children ? "#555" : "#999")
      .attr("stroke-width", 10)
    nodeEnter.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d._children ? -6 : 6)
      .attr("text-anchor", d => d._children ? "end" : "start")
      .text(d => d.data.type)
      .clone(true).lower()
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .attr("stroke", "white")
    // Transition nodes to their new position.
    const nodeUpdate = (node as any).merge(nodeEnter).transition(transition)
      .attr("transform", (d: any) => `translate(${d.y},${d.x})`)
      .attr("fill-opacity", 1)
      .attr("stroke-opacity", 1)
    // Transition exiting nodes to the parent's new position.
    const nodeExit = (node as any).exit().transition(transition).remove()
      .attr("transform", (d: any) => `translate(${source.y},${source.x})`)
      .attr("fill-opacity", 0)
      .attr("stroke-opacity", 0)
    // Update the links…
    const link = gLink.selectAll("path")
      .data(links, d => (d as any).target.id) as any
    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().append("path")
      .attr("d", (d: any) => {
        const o = { x: source.x0, y: source.y0 }
        return diagonal({ source: o, target: o } as any)
      })
    // Transition links to their new position.
    link.merge(linkEnter).transition(transition)
      .attr("d", diagonal)
    // Transition exiting nodes to the parent's new position.
    link.exit().transition(transition).remove()
      .attr("d", (d: any) => {
        const o = { x: source.x, y: source.y }
        return diagonal({ source: o, target: o } as any)
      })
    // Stash the old positions for transition.
    root.eachBefore(d => {
      d.x0 = d.x
      d.y0 = d.y
    })
  }
  update(root)
  return svg
}

