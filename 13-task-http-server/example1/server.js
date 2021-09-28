const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    });
    res.write(`<div>
    <h1>Dzień dobry</h1>
    <script src="./code.js"></script>
    `);
    res.end('Koniec Diva</div>');
}).listen(3000, '127.0.0.1')