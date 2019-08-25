import test from 'ava'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { getPackageJsonFolder } from '../src/util/misc'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
using namespace emscripten;
using namespace cv;

namespace binding_utils
{
  template<typename classT, typename enumT>
  static inline typename std::underlying_type<enumT>::type classT::* underlying_ptr(enumT classT::* enum_ptr)
  {
      return reinterpret_cast<typename std::underlying_type<enumT>::type classT::*>(enum_ptr);
  }

  template<typename T>
  emscripten::val matData(const cv::Mat& mat)
  {
      return emscripten::val(emscripten::memory_view<T>((mat.total()*mat.elemSize())/sizeof(T),
                              (T*)mat.data));
  }
}

EMSCRIPTEN_BINDINGS(testBinding) {
  function("Canny", select_overload<void(const cv::Mat&, cv::Mat&, double, double, int, bool)>(&Wrappers::Canny_wrapper));

  emscripten::class_<cv::CalibrateRobertson ,base<CalibrateCRF>>("CalibrateRobertson")
    .function("getThreshold", select_overload<float()const>(&cv::CalibrateRobertson::getThreshold), pure_virtual())
    .function("getRadiance", select_overload<Mat()const>(&cv::CalibrateRobertson::getRadiance), pure_virtual())
    .function("setThreshold", select_overload<void(cv::CalibrateRobertson&,float)>(&Wrappers::CalibrateRobertson_setThreshold_wrapper), pure_virtual())
    .function("setMaxIter", select_overload<void(cv::CalibrateRobertson&,int)>(&Wrappers::CalibrateRobertson_setMaxIter_wrapper), pure_virtual())
    .constructor(select_overload<Ptr<CalibrateRobertson>(int,float)>(&Wrappers::_createCalibrateRobertson_wrapper))
    .constructor(select_overload<Ptr<CalibrateRobertson>(int)>(&Wrappers::_createCalibrateRobertson_wrapper_1))
    .constructor(select_overload<Ptr<CalibrateRobertson>()>(&Wrappers::_createCalibrateRobertson_wrapper_2))
    .function("getMaxIter", select_overload<int()const>(&cv::CalibrateRobertson::getMaxIter), pure_virtual())
    .smart_ptr<Ptr<cv::CalibrateRobertson>>("Ptr<CalibrateRobertson>");
};
    `,
    language: Language.cpp,
    omitPosition: true,
    text: true,
    basePath: getPackageJsonFolder() + '/dist/static/'
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 5)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
//  writeFileSync('tmp.json', JSON.stringify(result, null, 2))
})

// test.todo('should report syntax errors to given listener')
// // , async t => {
// //   await parseAstOrThrow({
// //     input: 'jo jo jo',
// //     language: Language.cpp,
// //     errorListener: {
// //       syntaxError(a, b, c, d, msg) {
// //         t.true(msg.includes(`no viable alternative at input`), msg)
// //       }
// //     }
// //   })
// // })

// test('generate correct ast', async t => {
//   const o = printNode({
//     node: result
//   })
//   writeFileSync('tmp.txt', o)
//   const expected = [`<type_identifier text="__darwin_size_t">
// </type_identifier> <= text="=">
//   </=> <scoped_type_identifier text="::std::os::raw::c_ulong">
//     <scoped_identifier text="::std::os::raw">
//       <scoped_identifier text="::std::os">
//         <scoped_identifier text="::std">
//           <:: text="::">
//           </::> <identifier text="std">
//           </identifier>`]
//   expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
// })
