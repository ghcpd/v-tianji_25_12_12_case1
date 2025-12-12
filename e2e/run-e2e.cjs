const http = require('http')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

async function run() {
  try {
    console.log('Building production assets...')
    execSync('npm run build', { stdio: 'inherit' })

    const root = path.resolve(__dirname, '..', 'dist')
    const port = 5173

    const server = http.createServer((req, res) => {
      try {
        let url = req.url.split('?')[0]
        if (url === '/') url = '/index.html'
        const filePath = path.join(root, decodeURIComponent(url))
        if (!filePath.startsWith(root)) {
          res.statusCode = 403
          res.end('Forbidden')
          return
        }
        if (!fs.existsSync(filePath)) {
          res.statusCode = 404
          res.end('Not found')
          return
        }
        const data = fs.readFileSync(filePath)
        const ext = path.extname(filePath).toLowerCase()
        const map = {
          '.html': 'text/html',
          '.js': 'application/javascript',
          '.css': 'text/css',
          '.json': 'application/json',
          '.png': 'image/png',
          '.svg': 'image/svg+xml',
          '.ico': 'image/x-icon',
          '.map': 'application/json',
        }
        res.setHeader('Content-Type', map[ext] || 'application/octet-stream')
        res.end(data)
      } catch (err) {
        res.statusCode = 500
        res.end('Server error')
      }
    })

    await new Promise((resolve, reject) => {
      server.on('error', reject)
      server.listen(port, () => {
        console.log('Preview server running on http://127.0.0.1:' + port)
        resolve()
      })
    })

    // Run Playwright (core) to do simple checks
    const { chromium } = require('playwright')
    const browser = await chromium.launch()
    const page = await browser.newPage()
    try {
      await page.goto('http://127.0.0.1:' + port, { waitUntil: 'networkidle' })

      // Basic checks
      const hasCity = await page.locator('text=San Francisco').first().isVisible()
      if (!hasCity) throw new Error('City text not visible')

      const hasSection = await page.locator('text=Temperature').first().isVisible()
      if (!hasSection) throw new Error('Temperature section not visible')

      const hasCanvas = await page.locator('canvas').first().isVisible()
      if (!hasCanvas) throw new Error('Chart canvas not visible')

      const listCount = await page.locator('ul.forecast > li').count()
      if (listCount < 3) throw new Error('Forecast items missing')

      console.log('E2E: All checks passed')
      await browser.close()
      server.close()
      process.exit(0)
    } catch (err) {
      console.error('E2E failure:', err)
      await browser.close()
      server.close()
      process.exit(2)
    }
  } catch (err) {
    console.error('E2E runner error:', err)
    process.exit(2)
  }
}

run()
