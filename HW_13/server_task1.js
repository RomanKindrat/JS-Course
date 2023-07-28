const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(`Your vote is accepted: ${new Date()}`);
    }
});

const ip = "127.0.0.1";
const port = 5000;

server.listen(port, ip, () => {
    console.log("Server started!");
});