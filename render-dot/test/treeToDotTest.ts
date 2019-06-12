import test from 'ava'
import { readFileSync } from 'fs'
import { terminateLibrary } from '../src/library'
import { renderDot } from '../src/renderDot'
import { treeToDot } from '../src';

test.after(async t => {
  await terminateLibrary()
})

test('should render dot from given tree', async t => {
 const r = treeToDot({
   label: '1', 
   children: [
     {label: '11', children: []},  {label: '12', children: [{label: '121', children: []}]},
     {label: '13', children: []},  {label: '14', children: [{label: '141', children: []}]}
   ]
 })
  t.deepEqual(r.dot, 
    `
digraph ATN {
  rankdir=LR;
  node0 [fontsize=11, label="1", width=.8];
  node1 [fontsize=11, label="11", width=.8];
  node0 -> node1 [fontsize=11, arrowsize=.9, arrowhead=normal];
  node2 [fontsize=11, label="12", width=.8];
  node0 -> node2 [fontsize=11, arrowsize=.9, arrowhead=normal];
  node3 [fontsize=11, label="121", width=.8];
  node2 -> node3 [fontsize=11, arrowsize=.9, arrowhead=normal];
  node4 [fontsize=11, label="13", width=.8];
  node0 -> node4 [fontsize=11, arrowsize=.9, arrowhead=normal];
  node5 [fontsize=11, label="14", width=.8];
  node0 -> node5 [fontsize=11, arrowsize=.9, arrowhead=normal];
  node6 [fontsize=11, label="141", width=.8];
  node5 -> node6 [fontsize=11, arrowsize=.9, arrowhead=normal];
}
    `.trim())
})

