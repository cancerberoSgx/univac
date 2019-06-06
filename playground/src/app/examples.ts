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



]
