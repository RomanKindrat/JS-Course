const os = require('os');
const http = require('http');
const personalModule = require('./personalmodule.js');


const server = http.createServer((req, res) => {
    const username = os.userInfo().username;
    const text =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HomeWork_12</title>
    </head>
    <body>
        ${personalModule.getGreeting(username)}
    </body>
    </html>`;

    res.end(text);
});

const ip = "127.0.0.1";
const port = 8000;

server.listen(port, ip, () => {
    console.log("Server started!");
});