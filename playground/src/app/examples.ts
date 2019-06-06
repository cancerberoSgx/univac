import { Language } from 'univac'

export interface Example {
  code: string;
  name: string
  language: Language
  description: string;
}

export const examples: Example[] = [

  {
    name: 'future.py',
    language: Language.python3,
    code: `
def _future_repr_info(future):
  # (Future) -> str
  """helper function for Future.__repr__"""
  info = [future._state.lower()]
  if future._state == _FINISHED:
    if future._exception is not None:
      info.append('exception={!r}'.format(future._exception))
    else:
      # use reprlib to limit the length of the output, especially
      # for very long strings
      result = reprlib.repr(future._result)
      info.append('result={}'.format(result))
  if future._callbacks:
    info.append(_format_callbacks(future._callbacks))
  if future._source_traceback:
    frame = future._source_traceback[-1]
    info.append('created at %s:%s' % (frame[0], frame[1]))
  return info
`.trimLeft(),
    description: ' ',
  },

  {
    name: 'helloWorld.c',
    language: Language.c,
    code: `    
#include <stdio.h>
int main()
{
  printf("Hello, World!\\n");
  return 0;
}    
`.trimLeft(),
    description: ' ',
  },

  {
    name: 'factorial.lua',
    language: Language.lua,
    code: `
-- defines a factorial function
function fact (n)
  if n == 0 then
    return 1
  else
    return n * fact(n-1)
  end
end

print("enter a number:")
a = io.read("*number")        -- read a number
print(fact(a))
`.trimLeft(),
    description: '',
  },

  {
    name: 'probe.java',
    language: Language.java,
    code: `
import java.io.File;
class Test {
  public static boolean profile = false;
  public static class Worker implements Runnable {
    public long parserStart;
    public long parserStop;
    List<String> files;
  }
  int m(String s){return s;}
}
`.trimLeft(),
    description: '',
  },

  {
    name: 'personTest.go',
    language: Language.golang,
    code: `
package main
import "fmt"
type Person struct {
  work func()
  name string
  age int32
}
func main() {
  person := Person{work: nil, name: "Michał", age: 29}
  fmt.Println(person)
}
`.trimLeft(),
    description: '',
  },

  {
    name: 'miscellaneous.kt',
    language: Language.kotlin,
    code: `
fun main() {
  val rectangle = Rectangle(5.0, 2.0) //no 'new' keyword required
  val triangle = Triangle(3.0, 4.0, 5.0)
  println("Area of rectangle is \${rectangle.calculateArea()}, its perimeter is \${rectangle.perimeter}")
  println("Area of triangle is \${triangle.calculateArea()}, its perimeter is \${triangle.perimeter}")
}
abstract class Shape(val sides: List<Double>) {
  val perimeter: Double get() = sides.sum()
  abstract fun calculateArea(): Double
}
interface RectangleProperties {
  val isSquare: Boolean
}
class Rectangle(
  var height: Double,
  var length: Double
) : Shape(listOf(height, length, height, length)), RectangleProperties {
  override val isSquare: Boolean get() = length == height
  override fun calculateArea(): Double = height * length
}
class Triangle(
  var sideA: Double,
  var sideB: Double,
  var sideC: Double
) : Shape(listOf(sideA, sideB, sideC)) {
  override fun calculateArea(): Double {
      val s = perimeter / 2
      return Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))
  }
}
`,
    description: '',
  },

  {
    name: 'factorial.erl',
    language: Language.erlang,
    code: `
-module(tut1).
-export([fac/1]).
fac(1) ->
  1;
fac(N) ->
  N * fac(N - 1).
`.trimLeft(),
    description: '',
  },

  {
    name: 'myClass.dart',
    language: Language.dart2,
    code: `
class MyClass<T> {
  final T a;
  final String b;
  const MyClass({@required this.a, @required this.b});
  @override
  String toString() => "$runtimeType(a: $a, b: 123)";
}
`.trimLeft(),
    description: '',
  },


  {
    name: 'looping.rb',
    language: Language.ruby,
    code: `
for(i = 1; i < length - 1; i+=1)
  for(j = 0; j < length - i; j+=1)
    if(mas[j] > mas[j+1])
      buf = mas[j]
      mas[j] = mas[j+1]
      mas[j+1] = buf
    end
  end
end
`.trimLeft(),
    description: '',
  },

  {
    name: 'HelloWorld.scala',
    language: Language.scala,
    code: `
object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, world!")
  }
}
`.trimLeft(),
    description: '',
  },

  {
    name: 'HelloWorld.r',
    language: Language.r,
    code: `
myString <- "Hello, World!"
print ( myString)
bdeff <- function(blocks, varieties) {
  blocks <- as.factor(blocks)
}
`.trimLeft(),
    description: '',
  },


  {
    name: 'HelloWorld.for',
    language: Language.fortran77,
    code: `
program main

c*********************************************************************72
c 
      implicit none

      write ( *, '(a)' ) '  Hello, world!'

      stop
      end

`.trimLeft(),
    description: '',
  },

  {
    name: 'triArea.for',
    language: Language.fortran77,
    code: `
C AREA OF A TRIANGLE WITH A STANDARD SQUARE ROOT FUNCTION
C INPUT - TAPE READER UNIT 5, INTEGER INPUT
C OUTPUT - LINE PRINTER UNIT 6, REAL OUTPUT
C INPUT ERROR DISPLAY ERROR OUTPUT CODE 1 IN JOB CONTROL LISTING
      READ INPUT TAPE 5, 501, IA, IB, IC
  501 FORMAT (3I5)
C IA, IB, AND IC MAY NOT BE NEGATIVE OR ZERO
C FURTHERMORE, THE SUM OF TWO SIDES OF A TRIANGLE
C MUST BE GREATER THAN THE THIRD SIDE, SO WE CHECK FOR THAT, TOO
      IF (IA) 777, 777, 701
  701 IF (IB) 777, 777, 702
  702 IF (IC) 777, 777, 703
  703 IF (IA+IB-IC) 777, 777, 704
  704 IF (IA+IC-IB) 777, 777, 705
  705 IF (IB+IC-IA) 777, 777, 799
  777 STOP 1
C USING HERON'S FORMULA WE CALCULATE THE
C AREA OF THE TRIANGLE
  799 S = FLOATF (IA + IB + IC) / 2.0
      AREA = SQRTF( S * (S - FLOATF(IA)) * (S - FLOATF(IB)) *
      +     (S - FLOATF(IC)))
      WRITE OUTPUT TAPE 6, 601, IA, IB, IC, AREA
  601 FORMAT (4H A= ,I5,5H  B= ,I5,5H  C= ,I5,8H  AREA= ,F10.2,
      +        13H SQUARE UNITS)
      STOP
      END
`.trimLeft(),
    description: '',
  },


  {
    name: 'randomStuff.st',
    language: Language.smalltalk,
    code: `
|myArray|

myArray := #('a' 'b' 'c' ).

#('hello' 'Javascript') at: 2 put: 'Smalltalk'; yourself.

Object subclass: #Customer
  instanceVariableNames: ''
  classVariableNames: ''
  poolDictionaries: ''
  category: ''.
  
Customer methodAt: #sayHello put: [
  Transcript show: 'Hello World.'; cr.
].

girlInBar phoneNumber 
  jerk say: 'Get lost' 
  jerk throwAt: drink.

10 timesRepeat: [
  Transcript show:'hello'.
  Transcript cr.
].
`.trimLeft(),
    description: '',
  },
  {
    name: 'module1.cls',
    language: Language.visualbasic6,
    code: `
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
`.trimLeft(),
    description: '',
  },



]
