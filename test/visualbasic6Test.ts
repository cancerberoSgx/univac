import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
  Persistable = 0  'NotPersistable
  DataBindingBehavior = 0  'vbNone
  DataSourceBehavior  = 0  'vbNone
  MTSTransactionMode  = 0  'NotAnMTSObject
END
Attribute VB_Name = "Module1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = True
Attribute VB_PredeclaredId = False
Attribute VB_Exposed = False
Public SomeVariable
Public SomeModule As New Module1

Public Enum Enum1
	EnumConst1=1
	EnumConst2 = 2
	EnumConst3 = -1
	EnumConst4 = &H123ABC&
End Enum

Function Function1()
  For I=0 To K.Value
    For J=1 To 20 Step 2
      Beep
    Next
  Next
End Function

Function Function2(I, J)
End Function

Sub Sub1()
End Sub

Sub Sub2(I, J)
End Sub

Function GetModule() As Module1
    Dim Module As New Module1
    Set GetModule = Module
End Function

Private Declare Sub subName1 Lib "MyLib" Alias "alias1" (arg1, arg2, ParamArray arg3)

Begin VB.Form Form
Begin TabDlg.SSTab Tab1
   TabCaption(0)   =   "Tab 1"
   Tab(0).ControlEnabled = 0   'False
   Tab(0).Control(1).Enabled=   0   'False
End
End
    ` .trim(),
    language: Language.visualbasic6,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: '.',
    language: Language.visualbasic6,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`no viable alternative at input`), msg)
      }
    }
  })
})

test.skip('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  const expected = [``]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
