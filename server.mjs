// server.mjs
import express from 'express'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')
const app = express()

// Serve static files from dist
app.use(express.static(resolve(__dirname, 'dist')))

// SPA fallback for non-API routes
app.use('*', async (req, res) => {
  try {
    const indexHtml = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')
    
    // For now, serve the static HTML (SSR will be added next)
    // In full SSR, we'd call entry-server.jsx here
    res.setHeader('Content-Type', 'text/html')
    res.send(indexHtml)
  } catch (e) {
    res.status(500).send('Server error')
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})