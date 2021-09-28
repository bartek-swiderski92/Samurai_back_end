// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     res.end('<h1>Witaj na stronie, stworzonej w Node.js!</h1>')
// }).listen(3000, '127.0.0.1')

const http = require('http');
const server = http.createServer();
// const handleRequest = () => {};
// server.addListener('request', handleRequest )

// server.on('request', () => {})
server.addListener('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Dzien Dobry')
})
server.listen(3000, '127.0.0.1')



// ((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     res.end('<h1>Witaj na stronie, stworzonej w Node.js!</h1>')
// }).listen(3000, '127.0.0.1')