var c = `

Object subclass: #RBObject
    instanceVariableNames: ''
    classVariableNames: 'DeviceA DeviceB DevicePacketKind HandlerA HandlerB Idler Worker WorkPacketKind '
    poolDictionaries: ''
    category: 'Examples-Richards'!.

RBObject subclass: #Packet
    instanceVariableNames: 'link identity kind datum data '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!.

RBObject subclass: #RichardsBenchmark
    instanceVariableNames: 'taskList currentTask currentTaskIdentity taskTable tracing layout queuePacketCount holdCount '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!.

RBObject subclass: #TaskState
    instanceVariableNames: 'packetPendingIV taskWaiting taskHolding '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!.

RBObject subclass: #DeviceTaskDataRecord
    instanceVariableNames: 'pending '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!.

RBObject subclass: #HandlerTaskDataRecord
    instanceVariableNames: 'workIn deviceIn '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!.

RBObject subclass: #WorkerTaskDataRecord
    instanceVariableNames: 'destination count '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!.

TaskState subclass: #TaskControlBlock
    instanceVariableNames: 'link identity priority input state function handle '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!.

RBObject subclass: #IdleTaskDataRecord
    instanceVariableNames: 'control count '
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples-Richards'!


!RBObject methodsFor: 'utilities'!

append: packet head: queueHead
| mouse link |
    packet link: nil.
    queueHead isNil ifTrue: [^packet].
    mouse := queueHead.
    [(link := mouse link) isNil]
	whileFalse: [mouse := link].
    mouse link: packet.
    ^queueHead! !
"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!
    `
// const createParser = require('./parser').createParser
// const p = createParser(c)
// let n
// debugger
// while((n=p.parse())){
//   console.log(n)
// }

console.log(JSON.stringify(parseAst(c), null, 2));

function parseAst(code) {
const root = {
  type: 'Script',
  children: []
}
const createParser = require('./parser').createParser
const p = createParser(code)
let n
const context = require('./context').createContext()
while((n=p.parse(context))){
  root.children.push(...[...Array.isArray(n) ? n : n && typeof n.type==='string' ? [n] : []])
}
return root
}