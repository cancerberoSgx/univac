import * as d3 from 'd3'
import { visitDescendants, Node } from '../../../dist/src';
import { unique } from 'misc-utils-of-mine-generic';


// const data2 = ()=> {
let  d =  {"type":"file_input","start":{"start":0,"stop":2,"line":1,"column":0,"text":"def"},"stop":{"start":678,"stop":678,"line":18,"column":13,"text":"o"},"children":[{"type":"stmt","start":{"start":0,"stop":2,"line":1,"column":0,"text":"def"},"stop":{"start":678,"stop":678,"line":18,"column":13,"text":"o"},"children":[{"type":"funcdef","start":{"start":0,"stop":2,"line":1,"column":0,"text":"def"},"stop":{"start":678,"stop":678,"line":18,"column":13,"text":"o"},"children":[{"type":"parameters","start":{"start":21,"stop":21,"line":1,"column":21,"text":"("},"stop":{"start":28,"stop":28,"line":1,"column":28,"text":")"},"children":[{"type":"typedargslist","start":{"start":22,"stop":27,"line":1,"column":22,"text":"future"},"stop":{"start":22,"stop":27,"line":1,"column":22,"text":"future"},"children":[{"type":"tfpdef","start":{"start":22,"stop":27,"line":1,"column":22,"text":"future"},"stop":{"start":22,"stop":27,"line":1,"column":22,"text":"future"},"children":[]}]}]},{"type":"suite","start":{"start":52,"stop":52,"line":3,"column":2,"text":" "},"stop":{"start":678,"stop":678,"line":18,"column":13,"text":"o"},"children":[{"type":"stmt","start":{"start":53,"stop":93,"line":3,"column":2,"text":"\"\"\"helper function for Future.__repr__\"\"\""},"stop":{"start":96,"stop":96,"line":4,"column":2,"text":" "},"children":[{"type":"expr_stmt","start":{"start":53,"stop":93,"line":3,"column":2,"text":"\"\"\"helper function for Future.__repr__\"\"\""},"stop":{"start":53,"stop":93,"line":3,"column":2,"text":"\"\"\"helper function for Future.__repr__\"\"\""},"children":[{"type":"atom","start":{"start":53,"stop":93,"line":3,"column":2,"text":"\"\"\"helper function for Future.__repr__\"\"\""},"stop":{"start":53,"stop":93,"line":3,"column":2,"text":"\"\"\"helper function for Future.__repr__\"\"\""},"children":[{"type":"str","start":{"start":53,"stop":93,"line":3,"column":2,"text":"\"\"\"helper function for Future.__repr__\"\"\""},"stop":{"start":53,"stop":93,"line":3,"column":2,"text":"\"\"\"helper function for Future.__repr__\"\"\""},"children":[]}]}]}]},{"type":"stmt","start":{"start":97,"stop":100,"line":4,"column":2,"text":"info"},"stop":{"start":129,"stop":129,"line":5,"column":2,"text":" "},"children":[{"type":"expr_stmt","start":{"start":97,"stop":100,"line":4,"column":2,"text":"info"},"stop":{"start":126,"stop":126,"line":4,"column":31,"text":"]"},"children":[{"type":"atom","start":{"start":97,"stop":100,"line":4,"column":2,"text":"info"},"stop":{"start":97,"stop":100,"line":4,"column":2,"text":"info"},"children":[]},{"type":"assign","start":{"start":102,"stop":102,"line":4,"column":7,"text":"="},"stop":{"start":102,"stop":102,"line":4,"column":7,"text":"="},"children":[]},{"type":"testlist","start":{"start":104,"stop":104,"line":4,"column":9,"text":"["},"stop":{"start":126,"stop":126,"line":4,"column":31,"text":"]"},"children":[{"type":"atom","start":{"start":104,"stop":104,"line":4,"column":9,"text":"["},"stop":{"start":126,"stop":126,"line":4,"column":31,"text":"]"},"children":[{"type":"testlist_comp","start":{"start":105,"stop":110,"line":4,"column":10,"text":"future"},"stop":{"start":125,"stop":125,"line":4,"column":30,"text":")"},"children":[{"type":"comparison","start":{"start":105,"stop":110,"line":4,"column":10,"text":"future"},"stop":{"start":125,"stop":125,"line":4,"column":30,"text":")"},"children":[{"type":"power","start":{"start":105,"stop":110,"line":4,"column":10,"text":"future"},"stop":{"start":125,"stop":125,"line":4,"column":30,"text":")"},"children":[{"type":"atom","start":{"start":105,"stop":110,"line":4,"column":10,"text":"future"},"stop":{"start":105,"stop":110,"line":4,"column":10,"text":"future"},"children":[]},{"type":"trailer","start":{"start":111,"stop":111,"line":4,"column":16,"text":"."},"stop":{"start":112,"stop":117,"line":4,"column":17,"text":"_state"},"children":[]},{"type":"trailer","start":{"start":118,"stop":118,"line":4,"column":23,"text":"."},"stop":{"start":119,"stop":123,"line":4,"column":24,"text":"lower"},"children":[]},{"type":"trailer","start":{"start":124,"stop":124,"line":4,"column":29,"text":"("},"stop":{"start":125,"stop":125,"line":4,"column":30,"text":")"},"children":[]}]}]}]}]}]}]}]},{"type":"stmt","start":{"start":130,"stop":131,"line":5,"column":2,"text":"if"},"stop":{"start":458,"stop":458,"line":13,"column":2,"text":" "},"children":[{"type":"if_stmt","start":{"start":130,"stop":131,"line":5,"column":2,"text":"if"},"stop":{"start":458,"stop":458,"line":13,"column":2,"text":" "},"children":[{"type":"comparison","start":{"start":133,"stop":138,"line":5,"column":5,"text":"future"},"stop":{"start":150,"stop":158,"line":5,"column":22,"text":"_FINISHED"},"children":[{"type":"power","start":{"start":133,"stop":138,"line":5,"column":5,"text":"future"},"stop":{"start":140,"stop":145,"line":5,"column":12,"text":"_state"},"children":[{"type":"atom","start":{"start":133,"stop":138,"line":5,"column":5,"text":"future"},"stop":{"start":133,"stop":138,"line":5,"column":5,"text":"future"},"children":[]},{"type":"trailer","start":{"start":139,"stop":139,"line":5,"column":11,"text":"."},"stop":{"start":140,"stop":145,"line":5,"column":12,"text":"_state"},"children":[]}]},{"type":"comp_op","start":{"start":147,"stop":148,"line":5,"column":19,"text":"=="},"stop":{"start":147,"stop":148,"line":5,"column":19,"text":"=="},"children":[]},{"type":"atom","start":{"start":150,"stop":158,"line":5,"column":22,"text":"_FINISHED"},"stop":{"start":150,"stop":158,"line":5,"column":22,"text":"_FINISHED"},"children":[]}]},{"type":"stmt","start":{"start":165,"stop":166,"line":6,"column":4,"text":"if"},"stop":{"start":458,"stop":458,"line":13,"column":2,"text":" "},"children":[{"type":"if_stmt","start":{"start":165,"stop":166,"line":6,"column":4,"text":"if"},"stop":{"start":458,"stop":458,"line":13,"column":2,"text":" "},"children":[{"type":"comparison","start":{"start":168,"stop":173,"line":6,"column":7,"text":"future"},"stop":{"start":193,"stop":196,"line":6,"column":32,"text":"None"},"children":[{"type":"power","start":{"start":168,"stop":173,"line":6,"column":7,"text":"future"},"stop":{"start":175,"stop":184,"line":6,"column":14,"text":"_exception"},"children":[{"type":"atom","start":{"start":168,"stop":173,"line":6,"column":7,"text":"future"},"stop":{"start":168,"stop":173,"line":6,"column":7,"text":"future"},"children":[]},{"type":"trailer","start":{"start":174,"stop":174,"line":6,"column":13,"text":"."},"stop":{"start":175,"stop":184,"line":6,"column":14,"text":"_exception"},"children":[]}]},{"type":"comp_op","start":{"start":186,"stop":187,"line":6,"column":25,"text":"is"},"stop":{"start":189,"stop":191,"line":6,"column":28,"text":"not"},"children":[]},{"type":"atom","start":{"start":193,"stop":196,"line":6,"column":32,"text":"None"},"stop":{"start":193,"stop":196,"line":6,"column":32,"text":"None"},"children":[]}]},{"type":"stmt","start":{"start":205,"stop":208,"line":7,"column":6,"text":"info"},"stop":{"start":264,"stop":264,"line":8,"column":4,"text":" "},"children":[{"type":"expr_stmt","start":{"start":205,"stop":208,"line":7,"column":6,"text":"info"},"stop":{"start":259,"stop":259,"line":7,"column":60,"text":")"},"children":[{"type":"comparison","start":{"start":205,"stop":208,"line":7,"column":6,"text":"info"},"stop":{"start":259,"stop":259,"line":7,"column":60,"text":")"},"children":[{"type":"power","start":{"start":205,"stop":208,"line":7,"column":6,"text":"info"},"stop":{"start":259,"stop":259,"line":7,"column":60,"text":")"},"children":[{"type":"atom","start":{"start":205,"stop":208,"line":7,"column":6,"text":"info"},"stop":{"start":205,"stop":208,"line":7,"column":6,"text":"info"},"children":[]},{"type":"trailer","start":{"start":209,"stop":209,"line":7,"column":10,"text":"."},"stop":{"start":210,"stop":215,"line":7,"column":11,"text":"append"},"children":[]},{"type":"trailer","start":{"start":216,"stop":216,"line":7,"column":17,"text":"("},"stop":{"start":259,"stop":259,"line":7,"column":60,"text":")"},"children":[{"type":"arglist","start":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"stop":{"start":258,"stop":258,"line":7,"column":59,"text":")"},"children":[{"type":"argument","start":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"stop":{"start":258,"stop":258,"line":7,"column":59,"text":")"},"children":[{"type":"comparison","start":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"stop":{"start":258,"stop":258,"line":7,"column":59,"text":")"},"children":[{"type":"power","start":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"stop":{"start":258,"stop":258,"line":7,"column":59,"text":")"},"children":[{"type":"atom","start":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"stop":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"children":[{"type":"str","start":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"stop":{"start":217,"stop":232,"line":7,"column":18,"text":"'exception={!r}'"},"children":[]}]},{"type":"trailer","start":{"start":233,"stop":233,"line":7,"column":34,"text":"."},"stop":{"start":234,"stop":239,"line":7,"column":35,"text":"format"},"children":[]},{"type":"trailer","start":{"start":240,"stop":240,"line":7,"column":41,"text":"("},"stop":{"start":258,"stop":258,"line":7,"column":59,"text":")"},"children":[{"type":"arglist","start":{"start":241,"stop":246,"line":7,"column":42,"text":"future"},"stop":{"start":248,"stop":257,"line":7,"column":49,"text":"_exception"},"children":[{"type":"argument","start":{"start":241,"stop":246,"line":7,"column":42,"text":"future"},"stop":{"start":248,"stop":257,"line":7,"column":49,"text":"_exception"},"children":[{"type":"comparison","start":{"start":241,"stop":246,"line":7,"column":42,"text":"future"},"stop":{"start":248,"stop":257,"line":7,"column":49,"text":"_exception"},"children":[{"type":"power","start":{"start":241,"stop":246,"line":7,"column":42,"text":"future"},"stop":{"start":248,"stop":257,"line":7,"column":49,"text":"_exception"},"children":[{"type":"atom","start":{"start":241,"stop":246,"line":7,"column":42,"text":"future"},"stop":{"start":241,"stop":246,"line":7,"column":42,"text":"future"},"children":[]},{"type":"trailer","start":{"start":247,"stop":247,"line":7,"column":48,"text":"."},"stop":{"start":248,"stop":257,"line":7,"column":49,"text":"_exception"},"children":[]}]}]}]}]}]}]}]}]}]}]}]}]}]}]},{"type":"suite","start":{"start":372,"stop":372,"line":11,"column":6,"text":" "},"stop":{"start":458,"stop":458,"line":13,"column":2,"text":" "},"children":[{"type":"stmt","start":{"start":373,"stop":378,"line":11,"column":6,"text":"result"},"stop":{"start":416,"stop":416,"line":12,"column":6,"text":" "},"children":[{"type":"expr_stmt","start":{"start":373,"stop":378,"line":11,"column":6,"text":"result"},"stop":{"start":409,"stop":409,"line":11,"column":42,"text":")"},"children":[{"type":"atom","start":{"start":373,"stop":378,"line":11,"column":6,"text":"result"},"stop":{"start":373,"stop":378,"line":11,"column":6,"text":"result"},"children":[]},{"type":"assign","start":{"start":380,"stop":380,"line":11,"column":13,"text":"="},"stop":{"start":380,"stop":380,"line":11,"column":13,"text":"="},"children":[]},{"type":"testlist","start":{"start":382,"stop":388,"line":11,"column":15,"text":"reprlib"},"stop":{"start":409,"stop":409,"line":11,"column":42,"text":")"},"children":[{"type":"comparison","start":{"start":382,"stop":388,"line":11,"column":15,"text":"reprlib"},"stop":{"start":409,"stop":409,"line":11,"column":42,"text":")"},"children":[{"type":"power","start":{"start":382,"stop":388,"line":11,"column":15,"text":"reprlib"},"stop":{"start":409,"stop":409,"line":11,"column":42,"text":")"},"children":[{"type":"atom","start":{"start":382,"stop":388,"line":11,"column":15,"text":"reprlib"},"stop":{"start":382,"stop":388,"line":11,"column":15,"text":"reprlib"},"children":[]},{"type":"trailer","start":{"start":389,"stop":389,"line":11,"column":22,"text":"."},"stop":{"start":390,"stop":393,"line":11,"column":23,"text":"repr"},"children":[]},{"type":"trailer","start":{"start":394,"stop":394,"line":11,"column":27,"text":"("},"stop":{"start":409,"stop":409,"line":11,"column":42,"text":")"},"children":[{"type":"arglist","start":{"start":395,"stop":400,"line":11,"column":28,"text":"future"},"stop":{"start":402,"stop":408,"line":11,"column":35,"text":"_result"},"children":[{"type":"argument","start":{"start":395,"stop":400,"line":11,"column":28,"text":"future"},"stop":{"start":402,"stop":408,"line":11,"column":35,"text":"_result"},"children":[{"type":"comparison","start":{"start":395,"stop":400,"line":11,"column":28,"text":"future"},"stop":{"start":402,"stop":408,"line":11,"column":35,"text":"_result"},"children":[{"type":"power","start":{"start":395,"stop":400,"line":11,"column":28,"text":"future"},"stop":{"start":402,"stop":408,"line":11,"column":35,"text":"_result"},"children":[{"type":"atom","start":{"start":395,"stop":400,"line":11,"column":28,"text":"future"},"stop":{"start":395,"stop":400,"line":11,"column":28,"text":"future"},"children":[]},{"type":"trailer","start":{"start":401,"stop":401,"line":11,"column":34,"text":"."},"stop":{"start":402,"stop":408,"line":11,"column":35,"text":"_result"},"children":[]}]}]}]}]}]}]}]}]}]}]},{"type":"stmt","start":{"start":417,"stop":420,"line":12,"column":6,"text":"info"},"stop":{"start":458,"stop":458,"line":13,"column":2,"text":" "},"children":[{"type":"expr_stmt","start":{"start":417,"stop":420,"line":12,"column":6,"text":"info"},"stop":{"start":455,"stop":455,"line":12,"column":44,"text":")"},"children":[{"type":"comparison","start":{"start":417,"stop":420,"line":12,"column":6,"text":"info"},"stop":{"start":455,"stop":455,"line":12,"column":44,"text":")"},"children":[{"type":"power","start":{"start":417,"stop":420,"line":12,"column":6,"text":"info"},"stop":{"start":455,"stop":455,"line":12,"column":44,"text":")"},"children":[{"type":"atom","start":{"start":417,"stop":420,"line":12,"column":6,"text":"info"},"stop":{"start":417,"stop":420,"line":12,"column":6,"text":"info"},"children":[]},{"type":"trailer","start":{"start":421,"stop":421,"line":12,"column":10,"text":"."},"stop":{"start":422,"stop":427,"line":12,"column":11,"text":"append"},"children":[]},{"type":"trailer","start":{"start":428,"stop":428,"line":12,"column":17,"text":"("},"stop":{"start":455,"stop":455,"line":12,"column":44,"text":")"},"children":[{"type":"arglist","start":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"stop":{"start":454,"stop":454,"line":12,"column":43,"text":")"},"children":[{"type":"argument","start":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"stop":{"start":454,"stop":454,"line":12,"column":43,"text":")"},"children":[{"type":"comparison","start":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"stop":{"start":454,"stop":454,"line":12,"column":43,"text":")"},"children":[{"type":"power","start":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"stop":{"start":454,"stop":454,"line":12,"column":43,"text":")"},"children":[{"type":"atom","start":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"stop":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"children":[{"type":"str","start":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"stop":{"start":429,"stop":439,"line":12,"column":18,"text":"'result={}'"},"children":[]}]},{"type":"trailer","start":{"start":440,"stop":440,"line":12,"column":29,"text":"."},"stop":{"start":441,"stop":446,"line":12,"column":30,"text":"format"},"children":[]},{"type":"trailer","start":{"start":447,"stop":447,"line":12,"column":36,"text":"("},"stop":{"start":454,"stop":454,"line":12,"column":43,"text":")"},"children":[{"type":"arglist","start":{"start":448,"stop":453,"line":12,"column":37,"text":"result"},"stop":{"start":448,"stop":453,"line":12,"column":37,"text":"result"},"children":[{"type":"argument","start":{"start":448,"stop":453,"line":12,"column":37,"text":"result"},"stop":{"start":448,"stop":453,"line":12,"column":37,"text":"result"},"children":[{"type":"atom","start":{"start":448,"stop":453,"line":12,"column":37,"text":"result"},"stop":{"start":448,"stop":453,"line":12,"column":37,"text":"result"},"children":[]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]},{"type":"stmt","start":{"start":459,"stop":460,"line":13,"column":2,"text":"if"},"stop":{"start":536,"stop":536,"line":15,"column":2,"text":" "},"children":[{"type":"if_stmt","start":{"start":459,"stop":460,"line":13,"column":2,"text":"if"},"stop":{"start":536,"stop":536,"line":15,"column":2,"text":" "},"children":[{"type":"comparison","start":{"start":462,"stop":467,"line":13,"column":5,"text":"future"},"stop":{"start":469,"stop":478,"line":13,"column":12,"text":"_callbacks"},"children":[{"type":"power","start":{"start":462,"stop":467,"line":13,"column":5,"text":"future"},"stop":{"start":469,"stop":478,"line":13,"column":12,"text":"_callbacks"},"children":[{"type":"atom","start":{"start":462,"stop":467,"line":13,"column":5,"text":"future"},"stop":{"start":462,"stop":467,"line":13,"column":5,"text":"future"},"children":[]},{"type":"trailer","start":{"start":468,"stop":468,"line":13,"column":11,"text":"."},"stop":{"start":469,"stop":478,"line":13,"column":12,"text":"_callbacks"},"children":[]}]}]},{"type":"stmt","start":{"start":485,"stop":488,"line":14,"column":4,"text":"info"},"stop":{"start":536,"stop":536,"line":15,"column":2,"text":" "},"children":[{"type":"expr_stmt","start":{"start":485,"stop":488,"line":14,"column":4,"text":"info"},"stop":{"start":533,"stop":533,"line":14,"column":52,"text":")"},"children":[{"type":"comparison","start":{"start":485,"stop":488,"line":14,"column":4,"text":"info"},"stop":{"start":533,"stop":533,"line":14,"column":52,"text":")"},"children":[{"type":"power","start":{"start":485,"stop":488,"line":14,"column":4,"text":"info"},"stop":{"start":533,"stop":533,"line":14,"column":52,"text":")"},"children":[{"type":"atom","start":{"start":485,"stop":488,"line":14,"column":4,"text":"info"},"stop":{"start":485,"stop":488,"line":14,"column":4,"text":"info"},"children":[]},{"type":"trailer","start":{"start":489,"stop":489,"line":14,"column":8,"text":"."},"stop":{"start":490,"stop":495,"line":14,"column":9,"text":"append"},"children":[]},{"type":"trailer","start":{"start":496,"stop":496,"line":14,"column":15,"text":"("},"stop":{"start":533,"stop":533,"line":14,"column":52,"text":")"},"children":[{"type":"arglist","start":{"start":497,"stop":513,"line":14,"column":16,"text":"_format_callbacks"},"stop":{"start":532,"stop":532,"line":14,"column":51,"text":")"},"children":[{"type":"argument","start":{"start":497,"stop":513,"line":14,"column":16,"text":"_format_callbacks"},"stop":{"start":532,"stop":532,"line":14,"column":51,"text":")"},"children":[{"type":"comparison","start":{"start":497,"stop":513,"line":14,"column":16,"text":"_format_callbacks"},"stop":{"start":532,"stop":532,"line":14,"column":51,"text":")"},"children":[{"type":"power","start":{"start":497,"stop":513,"line":14,"column":16,"text":"_format_callbacks"},"stop":{"start":532,"stop":532,"line":14,"column":51,"text":")"},"children":[{"type":"atom","start":{"start":497,"stop":513,"line":14,"column":16,"text":"_format_callbacks"},"stop":{"start":497,"stop":513,"line":14,"column":16,"text":"_format_callbacks"},"children":[]},{"type":"trailer","start":{"start":514,"stop":514,"line":14,"column":33,"text":"("},"stop":{"start":532,"stop":532,"line":14,"column":51,"text":")"},"children":[{"type":"arglist","start":{"start":515,"stop":520,"line":14,"column":34,"text":"future"},"stop":{"start":522,"stop":531,"line":14,"column":41,"text":"_callbacks"},"children":[{"type":"argument","start":{"start":515,"stop":520,"line":14,"column":34,"text":"future"},"stop":{"start":522,"stop":531,"line":14,"column":41,"text":"_callbacks"},"children":[{"type":"comparison","start":{"start":515,"stop":520,"line":14,"column":34,"text":"future"},"stop":{"start":522,"stop":531,"line":14,"column":41,"text":"_callbacks"},"children":[{"type":"power","start":{"start":515,"stop":520,"line":14,"column":34,"text":"future"},"stop":{"start":522,"stop":531,"line":14,"column":41,"text":"_callbacks"},"children":[{"type":"atom","start":{"start":515,"stop":520,"line":14,"column":34,"text":"future"},"stop":{"start":515,"stop":520,"line":14,"column":34,"text":"future"},"children":[]},{"type":"trailer","start":{"start":521,"stop":521,"line":14,"column":40,"text":"."},"stop":{"start":522,"stop":531,"line":14,"column":41,"text":"_callbacks"},"children":[]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]},{"type":"stmt","start":{"start":537,"stop":538,"line":15,"column":2,"text":"if"},"stop":{"start":667,"stop":667,"line":18,"column":2,"text":" "},"children":[{"type":"if_stmt","start":{"start":537,"stop":538,"line":15,"column":2,"text":"if"},"stop":{"start":667,"stop":667,"line":18,"column":2,"text":" "},"children":[{"type":"comparison","start":{"start":540,"stop":545,"line":15,"column":5,"text":"future"},"stop":{"start":547,"stop":563,"line":15,"column":12,"text":"_source_traceback"},"children":[{"type":"power","start":{"start":540,"stop":545,"line":15,"column":5,"text":"future"},"stop":{"start":547,"stop":563,"line":15,"column":12,"text":"_source_traceback"},"children":[{"type":"atom","start":{"start":540,"stop":545,"line":15,"column":5,"text":"future"},"stop":{"start":540,"stop":545,"line":15,"column":5,"text":"future"},"children":[]},{"type":"trailer","start":{"start":546,"stop":546,"line":15,"column":11,"text":"."},"stop":{"start":547,"stop":563,"line":15,"column":12,"text":"_source_traceback"},"children":[]}]}]},{"type":"suite","start":{"start":569,"stop":569,"line":16,"column":4,"text":" "},"stop":{"start":667,"stop":667,"line":18,"column":2,"text":" "},"children":[{"type":"stmt","start":{"start":570,"stop":574,"line":16,"column":4,"text":"frame"},"stop":{"start":610,"stop":610,"line":17,"column":4,"text":" "},"children":[{"type":"expr_stmt","start":{"start":570,"stop":574,"line":16,"column":4,"text":"frame"},"stop":{"start":605,"stop":605,"line":16,"column":39,"text":"]"},"children":[{"type":"atom","start":{"start":570,"stop":574,"line":16,"column":4,"text":"frame"},"stop":{"start":570,"stop":574,"line":16,"column":4,"text":"frame"},"children":[]},{"type":"assign","start":{"start":576,"stop":576,"line":16,"column":10,"text":"="},"stop":{"start":576,"stop":576,"line":16,"column":10,"text":"="},"children":[]},{"type":"testlist","start":{"start":578,"stop":583,"line":16,"column":12,"text":"future"},"stop":{"start":605,"stop":605,"line":16,"column":39,"text":"]"},"children":[{"type":"comparison","start":{"start":578,"stop":583,"line":16,"column":12,"text":"future"},"stop":{"start":605,"stop":605,"line":16,"column":39,"text":"]"},"children":[{"type":"power","start":{"start":578,"stop":583,"line":16,"column":12,"text":"future"},"stop":{"start":605,"stop":605,"line":16,"column":39,"text":"]"},"children":[{"type":"atom","start":{"start":578,"stop":583,"line":16,"column":12,"text":"future"},"stop":{"start":578,"stop":583,"line":16,"column":12,"text":"future"},"children":[]},{"type":"trailer","start":{"start":584,"stop":584,"line":16,"column":18,"text":"."},"stop":{"start":585,"stop":601,"line":16,"column":19,"text":"_source_traceback"},"children":[]},{"type":"trailer","start":{"start":602,"stop":602,"line":16,"column":36,"text":"["},"stop":{"start":605,"stop":605,"line":16,"column":39,"text":"]"},"children":[{"type":"subscriptlist","start":{"start":603,"stop":603,"line":16,"column":37,"text":"-"},"stop":{"start":604,"stop":604,"line":16,"column":38,"text":"1"},"children":[{"type":"subscript","start":{"start":603,"stop":603,"line":16,"column":37,"text":"-"},"stop":{"start":604,"stop":604,"line":16,"column":38,"text":"1"},"children":[{"type":"comparison","start":{"start":603,"stop":603,"line":16,"column":37,"text":"-"},"stop":{"start":604,"stop":604,"line":16,"column":38,"text":"1"},"children":[{"type":"atom","start":{"start":604,"stop":604,"line":16,"column":38,"text":"1"},"stop":{"start":604,"stop":604,"line":16,"column":38,"text":"1"},"children":[{"type":"integer","start":{"start":604,"stop":604,"line":16,"column":38,"text":"1"},"stop":{"start":604,"stop":604,"line":16,"column":38,"text":"1"},"children":[]}]}]}]}]}]}]}]}]}]}]},{"type":"stmt","start":{"start":611,"stop":614,"line":17,"column":4,"text":"info"},"stop":{"start":667,"stop":667,"line":18,"column":2,"text":" "},"children":[{"type":"expr_stmt","start":{"start":611,"stop":614,"line":17,"column":4,"text":"info"},"stop":{"start":664,"stop":664,"line":17,"column":57,"text":")"},"children":[{"type":"comparison","start":{"start":611,"stop":614,"line":17,"column":4,"text":"info"},"stop":{"start":664,"stop":664,"line":17,"column":57,"text":")"},"children":[{"type":"power","start":{"start":611,"stop":614,"line":17,"column":4,"text":"info"},"stop":{"start":664,"stop":664,"line":17,"column":57,"text":")"},"children":[{"type":"atom","start":{"start":611,"stop":614,"line":17,"column":4,"text":"info"},"stop":{"start":611,"stop":614,"line":17,"column":4,"text":"info"},"children":[]},{"type":"trailer","start":{"start":615,"stop":615,"line":17,"column":8,"text":"."},"stop":{"start":616,"stop":621,"line":17,"column":9,"text":"append"},"children":[]},{"type":"trailer","start":{"start":622,"stop":622,"line":17,"column":15,"text":"("},"stop":{"start":664,"stop":664,"line":17,"column":57,"text":")"},"children":[{"type":"arglist","start":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"stop":{"start":663,"stop":663,"line":17,"column":56,"text":")"},"children":[{"type":"argument","start":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"stop":{"start":663,"stop":663,"line":17,"column":56,"text":")"},"children":[{"type":"comparison","start":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"stop":{"start":663,"stop":663,"line":17,"column":56,"text":")"},"children":[{"type":"term","start":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"stop":{"start":663,"stop":663,"line":17,"column":56,"text":")"},"children":[{"type":"atom","start":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"stop":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"children":[{"type":"str","start":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"stop":{"start":623,"stop":640,"line":17,"column":16,"text":"'created at %s:%s'"},"children":[]}]},{"type":"atom","start":{"start":644,"stop":644,"line":17,"column":37,"text":"("},"stop":{"start":663,"stop":663,"line":17,"column":56,"text":")"},"children":[{"type":"testlist_comp","start":{"start":645,"stop":649,"line":17,"column":38,"text":"frame"},"stop":{"start":662,"stop":662,"line":17,"column":55,"text":"]"},"children":[{"type":"comparison","start":{"start":645,"stop":649,"line":17,"column":38,"text":"frame"},"stop":{"start":652,"stop":652,"line":17,"column":45,"text":"]"},"children":[{"type":"power","start":{"start":645,"stop":649,"line":17,"column":38,"text":"frame"},"stop":{"start":652,"stop":652,"line":17,"column":45,"text":"]"},"children":[{"type":"atom","start":{"start":645,"stop":649,"line":17,"column":38,"text":"frame"},"stop":{"start":645,"stop":649,"line":17,"column":38,"text":"frame"},"children":[]},{"type":"trailer","start":{"start":650,"stop":650,"line":17,"column":43,"text":"["},"stop":{"start":652,"stop":652,"line":17,"column":45,"text":"]"},"children":[{"type":"subscriptlist","start":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"stop":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"children":[{"type":"subscript","start":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"stop":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"children":[{"type":"atom","start":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"stop":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"children":[{"type":"integer","start":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"stop":{"start":651,"stop":651,"line":17,"column":44,"text":"0"},"children":[]}]}]}]}]}]}]},{"type":"comparison","start":{"start":655,"stop":659,"line":17,"column":48,"text":"frame"},"stop":{"start":662,"stop":662,"line":17,"column":55,"text":"]"},"children":[{"type":"power","start":{"start":655,"stop":659,"line":17,"column":48,"text":"frame"},"stop":{"start":662,"stop":662,"line":17,"column":55,"text":"]"},"children":[{"type":"atom","start":{"start":655,"stop":659,"line":17,"column":48,"text":"frame"},"stop":{"start":655,"stop":659,"line":17,"column":48,"text":"frame"},"children":[]},{"type":"trailer","start":{"start":660,"stop":660,"line":17,"column":53,"text":"["},"stop":{"start":662,"stop":662,"line":17,"column":55,"text":"]"},"children":[{"type":"subscriptlist","start":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"stop":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"children":[{"type":"subscript","start":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"stop":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"children":[{"type":"atom","start":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"stop":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"children":[{"type":"integer","start":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"stop":{"start":661,"stop":661,"line":17,"column":54,"text":"1"},"children":[]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]},{"type":"stmt","start":{"start":668,"stop":673,"line":18,"column":2,"text":"return"},"stop":{"start":678,"stop":678,"line":18,"column":13,"text":"o"},"children":[{"type":"flow_stmt","start":{"start":668,"stop":673,"line":18,"column":2,"text":"return"},"stop":{"start":675,"stop":678,"line":18,"column":9,"text":"info"},"children":[{"type":"return_stmt","start":{"start":668,"stop":673,"line":18,"column":2,"text":"return"},"stop":{"start":675,"stop":678,"line":18,"column":9,"text":"info"},"children":[{"type":"testlist","start":{"start":675,"stop":678,"line":18,"column":9,"text":"info"},"stop":{"start":675,"stop":678,"line":18,"column":9,"text":"info"},"children":[{"type":"atom","start":{"start":675,"stop":678,"line":18,"column":9,"text":"info"},"stop":{"start":675,"stop":678,"line":18,"column":9,"text":"info"},"children":[]}]}]}]}]}]}]}]}]}
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


function ff2(n:any, level=0){
  n.value = 1
  n.children.forEach((c:any)=>{
    ff2(c, level+1)
    n.value+=(c.value||1)
  })
  delete n.start
  delete n.stop
  n.__children__ = n.children 
  if(level>5){
    
    delete n.children
  }else {
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

  const svg = buildTreeMap(d);
  document.body.appendChild(svg.node()!)
}

test()

function buildTreeMap(d: {}) {

  const width= 975,
  height = 560,
  format = d3.format(",d"),
  color = d3.scaleOrdinal(d3.schemeCategory10)
// let node:any,
// x = d3.scaleLinear().range([0, width]),
    // y = d3.scaleLinear().range([0, height])

  
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height] as any)
    .style("font", "10px sans-serif");
    
   

    renderNode(d)
  
  return svg

function renderNode(data:any){
    // debugger
    svg.selectAll("g").remove()

  const treemap = (data:any) => 
  d3.treemap()
  // .tile(d3[tile])
  .size([width, height])
  .padding(1)
  .round(true)
(d3.hierarchy(data)
  .sum(d => d.value)
  .sort((a:any, b:any) => b.value - a.value))

  const root = treemap(data);  

  const leaf = svg.selectAll("g")
.data((root as any).leaves())
.join("g")
  .attr("transform", (d: any) => `translate(${d.x0},${d.y0})`)
  .on("click", function(d:any) { 

    const target = d 
    const data = {
      ...target.data,
      children: target.data.__children__
    }
    data.__value__ = data.value
    delete data.value
    debugger

    renderNode(data); 

});

leaf.append("title")
  .text((d : any)=> `${d.ancestors().reverse().map((d:any) => d.data.type).join("/")}\n${format(d.value)}`);

leaf.append("rect")
  .attr("id", (d:any) => (d.leafUid = unique("leaf") as any).id)
  .attr("fill", (d:any) => { while (d.depth > 1) d = d.parent; return color(d.data.type); })
  // .attr("fill-opacity", 0.6)
  .attr("width", (d:any) => d.x1 - d.x0)
  .attr("height", (d:any) => d.y1 - d.y0);


leaf.append("clipPath")
  .attr("id", (d:any) => ((d.clipUid = d.clipUid|| unique("clip")) as any).id)
.append("use")
  .attr("xlink:href", (d:any) => d.leafUid.href);

leaf.append("text")
  .attr("clip-path", (d:any) => d.clipUid)
.selectAll("tspan")
.data((d:any) => d.data.type.split(/(?=[A-Z][^A-Z])/g).concat(format(d.value)))
.join("tspan")
  .attr("x", 3)
  .attr("y", (d, i, nodes) => `${((i === nodes.length - 1) as any) * 0.3 + 1.1 + i * 0.9}em`)
  .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
  .text((d:any) => d);


}
// function zoom(d:any) {
//   renderNode(d.data)
//   d3.event.stopPropagation();
// }

  }
//   // return svg;
// }

