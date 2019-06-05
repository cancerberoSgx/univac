import test from 'ava'
import { execSync } from 'child_process';
import puppeteer from 'puppeteer'

test('parseAst', async t => {
  execSync('npm run build')
  execSync("parcel build test-browser/testBrowser.html --public-url './'")


// (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = `file://${process.cwd()}/dist/testBrowser.html`
  // console.log(url)  
  await page.goto(url);
  // await page.screenshot({path: 'example.png'});
  t.true((await page.evaluate(()=>document.body.innerHTML)).includes(`"type": "compilationUnit"`))
  await browser.close();
// })();
  // installJSDOM()

})

