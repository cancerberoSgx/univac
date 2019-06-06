import { Language } from 'univac'

export interface Example {
  code: string;
  name: string
  language: Language
  description: string;
}

export const examples: Example[] = [

  {
    name: 'Python3 sample',
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
`.trim(),
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
`.trim(),
    description: ' ',
  },

  {
    name: 'loops.lua',
    language: Language.lua,
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
    `.trim(),
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
      `.trim(),
    description: '',
  },

  {
    name: 'probe.go',
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
  fmt.Println(person)  // {<nil> Michał 29}
}
      `.trim(),
    description: '',
  },

  {
    name: 'test.kt',
    language: Language.kotlin,
    code: `
class Runnable<a,a>(a : doo = 0) : foo(d=0), bar by x, bar {
}
fun foo() {
  when (a) {
    a.foo<T>(a, d) -> a
  }
}
enum class Color(val rgb : Int) {
  RED(0xFF000) {
      override fun foo(): Int { return 1 }
  }
}
      `.trim(),
    description: '',
  },
 
]
