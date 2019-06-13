import test from 'ava'
import { execSync } from 'child_process';
import puppeteer from 'puppeteer'
import { tryTo, sleep } from 'misc-utils-of-mine-generic';
import { staticServer } from './staticServer';
import { resolve } from 'path';

// test.afterEach(()=>{
//   tryTo(()=>execSync('killall node'))
// })
// test.beforeEach(()=>{
//   tryTo(()=>execSync('killall node'))

// })
test('parseAst', async t => {
  t.notThrows(()=>execSync('npm run build', {stdio: 'inherit'}), 'npm run build')
  t.notThrows(()=>execSync('mkdir -p test-browser-outdir ; cp -r dist/static/* test-browser-outdir', {stdio: 'inherit'}), 'cp -r dist/static/')
  t.notThrows(()=> execSync("npx parcel build test-browser/testBrowser.html --public-url './' -d test-browser-outdir --no-source-maps --no-minify", {stdio: 'inherit'}), 'npx parcel build')

  await sleep(1000)

const server = await   staticServer(resolve('test-browser-outdir'), 8080)
server.on('listening', async  ()=>{
  const browser = await puppeteer.launch( {headless: false});
  const page = await browser.newPage();
  const url = `http://localhost:8080/testBrowser.html`
  // await sleep(3000)
 

  await page.goto(url)
  await sleep(3000)
  const expected =[
    `"type": "scoped_identifier"`, 
  `"type": "compilationUnit"`]
// t.plan(expected.length)
  const content = await page.evaluate(()=>document.body.innerHTML)
  // console.log(content);
  
  expected.forEach(e=>t.true(content.includes(e)))
  await browser.close()
  // server.close()
  // await sleep(2000)
})
  // t.notThrows(()=> tryTo(()=>execSync('npx http-server test-browser-outdir &' )), 'http-server')
 

  // t.
  // tryTo(()=>execSync('killall node'))

})

