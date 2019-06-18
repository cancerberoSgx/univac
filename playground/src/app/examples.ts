import { Language } from 'univac'

export interface Example {
  code: string;
  name: string
  language: Language
  description: string;
}

export const examples: Example[] = [
  {
    name: 'skin.scss',
    language: Language.scss,
    code: `
$title-font: normal 24px/1.5 'Open Sans', sans-serif;
$cool-red: #F44336;
$box-shadow-bottom-only: 0 2px 1px 0 rgba(0, 0, 0, 0.2);

h1.title {
  font: $title-font;
  color: $cool-red;
}

div.container {
  color: $cool-red;
  background: #fff;
  width: 100%;
  box-shadow: $box-shadow-bottom-only;
}
`.trimLeft(),
    description: ' ',
  },
  {
    name: 'expr1.txt',
    language: Language.sexpression,
    code: `
(source_file ((milk juice a b c 1 2 (3)) (honey marmalade))
  (package_clause (package_identifier))
  (function_declaration (identifier) (parameter_list) (block
    (call_expression
      (identifier)
      (argument_list
        (identifier)
        (variadic_argument (identifier))))
    (call_expression (((milk juice) (honey marmalade)))
      (identifier)
      (argument_list (identifier) (identifier)))
    (call_expression
      (identifier)
      (argument_list (identifier) (variadic_argument (identifier))))
    )
  )
)   
`.trimLeft(),
    description: ' ',
  },
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
    name: 'atom.sh',
    language: Language.bash,
    code: `    
#!/bin/bash

if [ "$(uname)" == 'Darwin' ]; then
  OS='Mac'
elif [ "$(expr substr $(uname -s) 1 5)" == 'Linux' ]; then
  OS='Linux'
else
  echo "Your platform ($(uname -a)) is not supported."
  exit 1
fi

if [ "$(basename $0)" == 'atom-beta' ]; then
  BETA_VERSION=true
else
  BETA_VERSION=
fi

export ATOM_DISABLE_SHELLING_OUT_FOR_ENVIRONMENT=true

while getopts ":wtfvh-:" opt; do
  case "$opt" in
    -)
      case "\${OPTARG}" in
        wait)
          WAIT=1
          ;;
        help|version)
          REDIRECT_STDERR=1
          EXPECT_OUTPUT=1
          ;;
        foreground|benchmark|benchmark-test|test)
          EXPECT_OUTPUT=1
          ;;
      esac
      ;;
    w)
      WAIT=1
      ;;
    h|v)
      REDIRECT_STDERR=1
      EXPECT_OUTPUT=1
      ;;
    f|t)
      EXPECT_OUTPUT=1
      ;;
  esac
done
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
    name: 'system.rs',
    language: Language.rust,
    code: `
pub type __darwin_size_t = ::std::os::raw::c_ulong;
pub type FILE = [u64; 19usize];
pub type TSSymbol = u16;
pub type TSFieldId = u16;
#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct TSLanguage {
    _unused: [u8; 0],
}
#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct TSParser {
    _unused: [u8; 0],
}
#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct TSTree {
    _unused: [u8; 0],
}
pub const TSInputEncoding_TSInputEncodingUTF8: TSInputEncoding = 0;
`.trimLeft(),
    description: '',
  },


  {
    name: 'personTest.go',
    language: Language.golang,
    code: `
package main

import (
  "fmt"
)

func main() {
  fmt.Printf("Hello, Golang\\n")
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
    name: 'hello.g4',
    language: Language.antlr4,
    code: `
// define a grammar called Hello
grammar Hello;
r   : 'hello' ID;
ID  : [a-z]+ ;
WS  : [ \\t\\r\\n]+ -> skip ;   
`,
    description: '',
  },

  {
    name: 'test.jl',
    language: Language.julia,
    code: `
function test(x, y)
  if x < y
      println("x is less than y")
  elseif x > y
      println("x is greater than y")
  else
      println("x is equal to y")
  end
end
`,
    description: '',
  },

  {
    name: 'syntax1.txt',
    language: Language.abnf,
    code: `

postal-address   = name-part street zip-part

name-part        = *(personal-part SP) last-name [SP suffix] CRLF
name-part        =/ personal-part CRLF

personal-part    = first-name / (initial ".")
first-name       = *ALPHA
initial          = ALPHA
last-name        = *ALPHA
suffix           = ("Jr." / "Sr." / 1*("I" / "V" / "X"))

street           = [apt SP] house-num SP street-name CRLF
apt              = 1*4DIGIT
house-num        = 1*8(DIGIT / ALPHA)
street-name      = 1*VCHAR

zip-part         = town-name "," SP state 1*2SP zip-code CRLF
town-name        = 1*(ALPHA / SP)
state            = 2ALPHA
zip-code         = 5DIGIT ["-" 4DIGIT]
    
    
`,
    description: '',
  },



  {
    name: 'misc.cpp',
    language: Language.cpp,
    code: `
#include <iostream.h>
main()
{
  cout << "Hello World!";
  return 0;
}
class C {
  public:
    int a;
    operator int() const;
    virtual ~Foo();
}; 
typedef int X;
struct S {
  union {
    int i;
  } U;
};
void f() {
  int x;
  static int y;
  thread_local int z;
}
int a; 
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
    name: 'overridingConflicts.kt',
    language: Language.kotlin,
    code: `
interface A {
  fun foo() { print("A") }
  fun bar()
}

interface B {
  fun foo() { print("B") }
  fun bar() { print("bar") }
}

class C : A {
  override fun bar() { print("bar") }
}

class D : A, B {
  override fun foo() {
    super<A>.foo()
    super<B>.foo()
  }
  override fun bar() {
    super<B>.bar()
  }
}
`.trim(),
    description: '',
  },


  {
    name: 'fold.kt',
    language: Language.kotlin,
    code: `

fun <T, R> Collection.fold(
  initial: R, 
  combine: (acc: R, nextElement: T) -> R
): R {
  var accumulator: R = initial
  for (element: T in this) {
      accumulator = combine(accumulator, element)
  }
  return accumulator
}

val items = listOf(1, 2, 3, 4, 5)

// Lambdas are code blocks enclosed in curly braces.
items.fold(0, { 
    // When a lambda has parameters, they go first, followed by '->'
    acc: Int, i: Int -> 
        print("acc = $acc, i = $i, ") 
    val result = acc + i
    println("result = $result")
    // The last expression in a lambda is considered the return value:
    result
})

// Parameter types in a lambda are optional if they can be inferred:
val joinedToString = items.fold("Elements:", { acc, i -> acc + " " + i })

// Function references can also be used for higher-order function calls:
val product = items.fold(1, Int::times)

  
`.trim(),
    description: '',
  },



  {
    name: 'account.lua',
    language: Language.lua,
    code: `
Account = {balance = 0}

function Account:new (o, name)
  o = o or {name=name}
  setmetatable(o, self)
  self.__index = self
  return o
end

function Account:deposit (v)
  self.balance = self.balance + v
end

function Account:withdraw (v)
  if v > self.balance then error("insufficient funds on account "..self.name) end
  self.balance = self.balance - v
end

function Account:show (title)
  print(title or "", self.name, self.balance)
end

a = Account:new(nil,"demo")
a:show("after creation")
a:deposit(1000.00)
a:show("after deposit")
a:withdraw(100.00)
a:show("after withdraw")
    
`.trim(),
    description: '',
  },


  {
    name: 'temperature.erl',
    language: Language.erlang,
    code: `

-module(tut5).
-export([format_temps/1]).

%% Only this function is exported
format_temps([])->                        % No output for an empty list
    ok;
format_temps([City | Rest]) ->
    print_temp(convert_to_celsius(City)),
    format_temps(Rest).

convert_to_celsius({Name, {c, Temp}}) ->  % No conversion needed
    {Name, {c, Temp}};
convert_to_celsius({Name, {f, Temp}}) ->  % Do the conversion
    {Name, {c, (Temp - 32) * 5 / 9}}.

print_temp({Name, {c, Temp}}) ->
    io:format("~-15w ~w c~n", [Name, Temp]).
    
`.trim(),
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
    name: 'headings.less',
    language: Language.less,
    code: `
// primary content that needs to be highlighted
@primarycolor: #FF7F50;
@color:#800080;
h1 {
    color: @primarycolor;
}
h3 {
    color: @color;
}
`.trim(),
    description: '',
  },


  {
    name: 'expression_syntax_kind.txt',
    language: Language.less,
    code: `
(source_file ((milk juice a b c 1 2 (3)) (honey marmalade))
  (package_clause (package_identifier))
  (function_declaration (identifier) (parameter_list) (block
    (call_expression
      (identifier)
      (argument_list
        (identifier)
        (variadic_argument (identifier))))
    (call_expression (((milk juice) (honey marmalade)))
      (identifier)
      (argument_list (identifier) (identifier)))
    (call_expression
      (identifier)
      (argument_list (identifier) (variadic_argument (identifier)))))))  
`.trim(),
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

`.trimLeft(),
    description: '',
  },
  {
    name: 'aux.wat',
    language: Language.wat,
    code: `
(module
  ;; Auxiliary definition
  (memory 1)

  (func $dummy)

  (func (export "empty")
    (block)
    (block $l)
  )

  (func (export "add") (param $x f64) (param $y f64) (result f64) (f64.add (local.get $x) (local.get $y)))

  (func (export "nearest") (param $x f64) (result f64) (f64.nearest (local.get $x)))

  (func (export "as-call_indirect-first") (result i32)
    (block (result i32)
      (call_indirect (type $check)
        (loop (result i32) (i32.const 1)) (i32.const 2) (i32.const 0)
      )
    )
  )
  (func (f64.const 1e308) drop)
)
`.trim(),
    description: '',
  },

  {
    name: 'concurrentPi.go',
    language: Language.golang,
    code: `
// Concurrent computation of pi.
// See https://goo.gl/la6Kli.
//
// This demonstrates Go's ability to handle
// large numbers of concurrent processes.
// It is an unreasonable way to calculate pi.
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Println(pi(5000))
}

// pi launches n goroutines to compute an
// approximation of pi.
func pi(n int) float64 {
  ch := make(chan float64)
  for k := 0; k <= n; k++ {
    go term(ch, float64(k))
  }
  f := 0.0
  for k := 0; k <= n; k++ {
    f += <-ch
  }
  return f
}

func term(ch chan float64, k float64) {
  ch <- 4 * math.Pow(-1, k) / (2*k + 1)
}
`.trim(),
    description: '',
  },

  {
    name: 'treeCompare.go',
    language: Language.golang,
    code: `
// Go's concurrency primitives make it easy to
// express concurrent concepts, such as
// this binary tree comparison.
//
// Trees may be of different shapes,
// but have the same contents. For example:
//
//        4               6
//      2   6          4     7
//     1 3 5 7       2   5
//                  1 3
//
// This program compares a pair of trees by
// walking each in its own goroutine,
// sending their contents through a channel
// to a third goroutine that compares them.

package main

import (
  "fmt"
  "math/rand"
)

// A Tree is a binary tree with integer values.
type Tree struct {
  Left  *Tree
  Value int
  Right *Tree
}

// Walk traverses a tree depth-first,
// sending each Value on a channel.
func Walk(t *Tree, ch chan int) {
  if t == nil {
    return
  }
  Walk(t.Left, ch)
  ch <- t.Value
  Walk(t.Right, ch)
}

// Walker launches Walk in a new goroutine,
// and returns a read-only channel of values.
func Walker(t *Tree) <-chan int {
  ch := make(chan int)
  go func() {
    Walk(t, ch)
    close(ch)
  }()
  return ch
}

// Compare reads values from two Walkers
// that run simultaneously, and returns true
// if t1 and t2 have the same contents.
func Compare(t1, t2 *Tree) bool {
  c1, c2 := Walker(t1), Walker(t2)
  for {
    v1, ok1 := <-c1
    v2, ok2 := <-c2
    if !ok1 || !ok2 {
      return ok1 == ok2
    }
    if v1 != v2 {
      break
    }
  }
  return false
}

// New returns a new, random binary tree
// holding the values 1k, 2k, ..., nk.
func New(n, k int) *Tree {
  var t *Tree
  for _, v := range rand.Perm(n) {
    t = insert(t, (1+v)*k)
  }
  return t
}

func insert(t *Tree, v int) *Tree {
  if t == nil {
    return &Tree{nil, v, nil}
  }
  if v < t.Value {
    t.Left = insert(t.Left, v)
    return t
  }
  t.Right = insert(t.Right, v)
  return t
}

func main() {
  t1 := New(100, 1)
  fmt.Println(Compare(t1, New(100, 1)), "Same Contents")
  fmt.Println(Compare(t1, New(99, 1)), "Differing Sizes")
  fmt.Println(Compare(t1, New(100, 2)), "Differing Values")
  fmt.Println(Compare(t1, New(101, 2)), "Dissimilar")
}
`.trim(),
    description: '',
  },



  {
    name: 'svgstring.r',
    language: Language.r,
    code: `
svgstring <- function(width = 10, height = 8, bg = "white",
                      pointsize = 12, standalone = TRUE,
                      system_fonts = list(), user_fonts = list()) {
  aliases <- validate_aliases(system_fonts, user_fonts)

  env <- new.env(parent = emptyenv())
  string_src <- svgstring_(env, width = width, height = height, bg = bg,
          pointsize = pointsize, standalone = standalone, aliases = aliases)

  function() {
    svgstr <- if(env$is_closed) env$svg_string else get_svg_content(string_src)
    structure(svgstr, class = "svg")
  }
}
`.trim(),
    description: '',
  },


  {
    name: 'die.rb',
    language: Language.ruby,
    code: `
class Die

  def roll
    @numberShowing = 1 + rand(6)
  end

  def showing
    @numberShowing
  end

end

die = Die.new
die.roll
puts die.showing
puts die.showing
die.roll
puts die.showing
puts die.showing
`.trim(),
    description: '',
  },



  {
    name: 'dragon.rb',
    language: Language.ruby,
    code: `
 
class Dragon

def initialize name
  @name = name
  @asleep = false
  @stuffInBelly     = 10  # He's full.
  @stuffInIntestine =  0  # He doesn't need to go.

  puts @name + ' is born.'
end

def feed
  puts 'You feed ' + @name + '.'
  @stuffInBelly = 10
  passageOfTime
end

def walk
  puts 'You walk ' + @name + '.'
  @stuffInIntestine = 0
  passageOfTime
end

def putToBed
  puts 'You put ' + @name + ' to bed.'
  @asleep = true
  3.times do
    if @asleep
      passageOfTime
    end
    if @asleep
      puts @name + ' snores, filling the room with smoke.'
    end
  end
  if @asleep
    @asleep = false
    puts @name + ' wakes up slowly.'
  end
end

def toss
  puts 'You toss ' + @name + ' up into the air.'
  puts 'He giggles, which singes your eyebrows.'
  passageOfTime
end

def rock
  puts 'You rock ' + @name + ' gently.'
  @asleep = true
  puts 'He briefly dozes off...'
  passageOfTime
  if @asleep
    @asleep = false
    puts '...but wakes when you stop.'
  end
end

private

# "private" means that the methods defined here are
# methods internal to the object.  (You can feed
# your dragon, but you can't ask him if he's hungry.)

def hungry?
  # Method names can end with "?".
  # Usually, we only do this if the method
  # returns true or false, like this:
  @stuffInBelly <= 2
end

def poopy?
  @stuffInIntestine >= 8
end

def passageOfTime
  if @stuffInBelly > 0
    # Move food from belly to intestine.
    @stuffInBelly     = @stuffInBelly     - 1
    @stuffInIntestine = @stuffInIntestine + 1
  else  # Our dragon is starving!
    if @asleep
      @asleep = false
      puts 'He wakes up suddenly!'
    end
    puts @name + ' is starving!  In desperation, he ate YOU!'
    exit  # This quits the program.
  end

  if @stuffInIntestine >= 10
    @stuffInIntestine = 0
    puts 'Whoops!  ' + @name + ' had an accident...'
  end

  if hungry?
    if @asleep
      @asleep = false
      puts 'He wakes up suddenly!'
    end
    puts @name + '\\'s stomach grumbles...'
  end

  if poopy?
    if @asleep
      @asleep = false
      puts 'He wakes up suddenly!'
    end
    puts @name + ' does the potty dance...'
  end
end

end

pet = Dragon.new 'Norbert'
pet.feed
pet.toss
pet.walk
pet.putToBed
pet.rock
pet.putToBed
pet.putToBed
pet.putToBed
pet.putToBed
`.trim(),
    description: '',
  },



]
