import test from 'ava'
import { graphToDot } from '../src'
import { terminateLibrary } from '../src/library'

test.after(async t => {
  await terminateLibrary()
})

test('should render dot from given tree', async t => {
  const r = graphToDot({
    node: {
      label: '1',
      children: [
        { label: '11', children: [] }, { label: '12', children: [{ label: '121', children: [] }] },
        { label: '13', children: [] }, { label: '14', children: [{ label: '141', children: [] }] }
      ]
    }
    , rankdir: 'LR', name: 'ATN'
  })
  t.deepEqual(r.dot,
    `
digraph ATN {
  rankdir=LR;
  node0 [label="1" ];
  node1 [label="11" ];
  node0 -> node1 ;
  node2 [label="12" ];
  node0 -> node2 ;
  node3 [label="121" ];
  node2 -> node3 ;
  node4 [label="13" ];
  node0 -> node4 ;
  node5 [label="14" ];
  node0 -> node5 ;
  node6 [label="141" ];
  node5 -> node6 ;
}
    `.trim())
})

