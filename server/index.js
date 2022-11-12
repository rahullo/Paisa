const fs = require('fs')
const http = require('http')
const url = requre('url')

const landingPageTemp = fs.readSync(`${__dirname}/templates/template-overview.html`, 'utf-8')

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true)

    if (pathname == '/') {
        res.end(landingPageTemp)
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to the request");
})