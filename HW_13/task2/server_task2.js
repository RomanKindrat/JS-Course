const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.method === 'GET')
    {
        req.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        fs.readFile('books.json', 'utf8', (err, data) => {
            if (err) 
            {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
            else
            {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    }
});

const ip = "127.0.0.1";
const port = 5000;

server.listen(port, ip, () => {
    console.log("Server started!");
});