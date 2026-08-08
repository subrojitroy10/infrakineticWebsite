// prerender.mjs
import puppeteer from 'puppeteer'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')
const distDir = resolve(__dirname, 'dist')

// Use the running dev server
const DEV_SERVER = 'http://localhost:5173'

async function prerender() {
  console.log('Starting prerender...')
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  
  await page.setViewport({ width: 1280, height: 800 })
  await page.setDefaultNavigationTimeout(60000)
  
  const url = DEV_SERVER
  console.log(`Prerendering ${url}...`)
  
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
    
    // Wait for React to hydrate and render - look for content in root
    await page.waitForFunction(() => {
      const root = document.getElementById('root')
      return root && root.innerHTML.length > 100
    }, { timeout: 30000 })
    
    // Give extra time for all animations and lazy-loaded content
    await new Promise(r => setTimeout(r, 5000))
    
    // Get the rendered HTML
    const html = await page.content()
    
    // Save
    writeFileSync(resolve(distDir, 'index.html'), html)
    console.log(`  ✓ Saved to index.html (${html.length} chars)`)
    
    // Check if content is rendered
    const hasContent = html.includes('Run the company') && html.includes('Operating engines')
    console.log(`  Content rendered: ${hasContent ? 'YES' : 'NO'}`)
    
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}`)
  }
  
  await browser.close()
  console.log('Prerender complete!')
}

prerender().catch(console.error)