// src/entry-server.jsx
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ThemeProvider } from './shared/theme/ThemeContext.jsx'
import App from './App.jsx'
import React from 'react'

export default function entryServer(url) {
  return new Promise((resolve, reject) => {
    const shell = { head: '', body: '' }
    
    const stream = renderToPipeableStream(
      <ThemeProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ThemeProvider>,
      {
        onShellReady() {
          stream.pipe({
            write: (chunk) => shell.body += chunk,
            end: () => resolve(shell.body)
          })
        },
        onShellError(err) {
          reject(err)
        }
      }
    )
  })
}