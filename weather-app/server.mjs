import { createServer } from 'http'
import { readFileSync } from 'fs'
import { join } from 'path'

const PORT = 5173
const dist = join(process.cwd(), 'dist')

const mimeTypes = {
  html: 'text/html',
  js: 'application/javascript',
  css: 'text/css',
  png: 'image/png',
  svg: 'image/svg+xml',
  json: 'application/json',
}

const server = createServer((req, res) => {
  const filePath = req.url === '/' ? '/index.html' : req.url
  const fullPath = join(dist, filePath)

  try {
    const file = readFileSync(fullPath)
    const ext = fullPath.split('.').pop()
    res.setHeader('Content-Type', mimeTypes[ext] || 'text/plain')
    res.end(file)
  } catch {
    res.statusCode = 404
    res.end('Not found')
  }
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
