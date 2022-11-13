const fs = require('fs')
const http = require('http');
const url = require('url');

const landingPageTemp = fs.readFileSync(`${__dirname}/templates/landing-page.html`, 'utf-8')
const cardTemp = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')

// const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
// const temp = fs.readFileSync


// const server = http.createServer((req, res) => {
//     const { query, pathname } = url.parse(req.url, true);

//     //Overview page
//     if (pathname === '/' || pathname === '/overview') {
//         res.writeHead(200, { 'Content-type': 'text/html' });
//         const output = landingPageTemp.replace('{%PRODUCT_CARDS%}', cardTemp)

//         res.end(output);
//     } else if (pathname === '/card') {
//         res.writeHead(200, { 'context-type': 'text/html' })
//         res.end(cardTemp)
//     }
//     // res.end("Hello from the server side!!!")
// })

// server.listen(3000, '127.0.0.1', () => {
//     console.log("Listening to requests on port 8000")
// })

const server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, { 'Context-type': 'text/html' })

    const output = landingPageTemp.replace('{%PRODUCT_CARDS%}', cardTemp)
    res.end(output)
})

server.on('close', () => {
    console.log('Server close');
})

server.listen(3000, '127.0.0.1', () => {
    console.log("Server is listening at port 3000")
})