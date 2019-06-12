import test from 'ava'
import { execSync } from 'child_process';
import puppeteer from 'puppeteer'

test('parseAst', async t => {
  execSync('npm run build')
  execSync("npx parcel build test-browser/testBrowser.html --public-url './' -d test-browser-outdir --no-source-maps --no-minify")

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = `file://${process.cwd()}/test-browser-outdir/testBrowser.html`
  await page.goto(url);
  t.true((await page.evaluate(()=>document.body.innerHTML)).includes(`"type": "compilationUnit"`))
  await browser.close();
})

