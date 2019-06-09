import test from 'ava'
import { execSync } from 'child_process'
import { readdirSync } from 'fs'

test('--help', async t => {
  const result = execSync('node bin/svg2png.js --help', { stdio: 'pipe' }).toString()
  const expected = [`Usage:`, `svg2png --input`]
  expected.forEach(e => t.true(result.includes(e)))
  t.true(true)
})

test('error on no --input', async t => {
  t.throws(() => execSync('node bin/svg2png.js --debug --format jpeg --output foo', { stdio: 'pipe' }))
})

test('should accept globs and output folder', async t => {
  const result = execSync('rm -rf tmp; mkdir -p tmp; node bin/svg2png.js --input "test/**/*2.svg" --output tmp', { stdio: 'pipe' }).toString()
  t.deepEqual(readdirSync('tmp'), ['tmp2.svg.png'])
})

test('should write given format', async t => {
  const result = execSync('rm -rf tmp; mkdir -p tmp; node bin/svg2png.js --input "test/**/*2.svg" --output tmp --format jpeg', { stdio: 'pipe' }).toString()
  t.deepEqual(readdirSync('tmp'), ['tmp2.svg.jpeg'])
})

// test('should get code from --input', async t => {
//   const result = execSync('node bin/universal-svg-rasterizer.js --input "digraph { a -> b; }"', { stdio: 'pipe' }).toString()
//   const expected = [`<polygon`, `<svg`]
//   expected.forEach(e => t.true(result.includes(e)))
// })

// test('--format json should generate valid json object', async t => {
//   const result = execSync('node bin/universal-svg-rasterizer.js --input "digraph { a -> b; }" --format json', { stdio: 'pipe' }).toString()
//   const expected = [`"points"`]
//   expected.forEach(e => t.true(result.includes(e)))
//   t.notThrows(()=>JSON.parse(result))
// })

// test('--format xdot should work', async t => {
//   const result = execSync('node bin/universal-svg-rasterizer.js --input "digraph { a -> b; }" --format xdot', { stdio: 'pipe' }).toString()
//   const expected = [`graph [`, `a -> b	 [`]
//   expected.forEach(e => t.true(result.includes(e)))
// })

// test('--format plain should work', async t => {
//   const result = execSync('node bin/universal-svg-rasterizer.js --input "digraph { a -> b; }" --format plain', { stdio: 'pipe' }).toString()
//   const expected = [`
// graph 1 0.75 1.5
// node a 0.375 1.25 0.75 0.5 a solid ellipse black lightgrey
// node b 0.375 0.25 0.75 0.5 b solid ellipse black lightgrey
// edge a b 4 0.375 0.99766 0.375 0.89071 0.375 0.76353 0.375 0.64468 solid black
// stop`.trim()]
//   expected.forEach(e => t.true(result.includes(e)))
// })

// // test('--format png', async t => {
// //   const result = execSync('node bin/universal-svg-rasterizer.js --input "digraph { a -> b; }" --format png', { stdio: 'pipe' }).toString()
// //   t.truthy(result);

// // })
