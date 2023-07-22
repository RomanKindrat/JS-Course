const http = require('http');
const os = require('os');
const path = require('path');


const server = http.createServer((request, response) => {
    const username = os.userInfo().username;
    const typeOs = os.type();
    const timeWork = (os.uptime() / 60).toFixed(2);
    const workingDir = process.cwd();
    const fileName = path.basename(__filename);

    const text = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HomeWork_12</title>
    </head>
    <body>
        <h2>System information</h2>
        <p>Current user name: ${username}</p>
        <p>OS type: ${typeOs}</p>
        <p>System work time: ${timeWork} minutes</p>
        <p>Current work directory: ${workingDir}</p>
        <p>Server file name: ${fileName}</p>
    </body>
    </html>`;

    response.end(text);
});

const ip = "127.0.0.1";
const port = 5000;

server.listen(port, ip, () => {
    console.log("Server started!");
});