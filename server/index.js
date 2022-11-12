const fs = require('fs')
const http = require('http');
const url = require('url');

const landingPageTemp = fs.readSync(`${__dirname}/templates/landing-page.html`, 'utf-8')
    // const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')


const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);


    //Overview page
    if (pathname === '/' || pathname === '/overview') {

        res.writeHead(200, { 'Content-type': 'text/html' });


        res.end(landingPageTemp);
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000")
})