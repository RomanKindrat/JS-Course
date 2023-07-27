const fs = require('fs');
const http = require('http');
const url = require('url');

const path = "data.txt";


function writeToTextFile(text) {
    fs.writeFile(path, text, err => {
        if (err)
            console.warn(err.message);
        else
            console.log("Content was written successfuly")
    });
}

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        return res.end();
    }
    const parsedUrl = url.parse(req.url, true);
    const queryData = parsedUrl.query;

    const data = queryData.text;
    writeToTextFile(data);

    fs.readFile(path, "utf8", (err, text) => {
        if (err)
            console.log(err.message);
        else
            res.end(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>HomeWork_12</title>
                    </head>
                    <body>
                        ${text}
                    </body>
                    </html>`);
    });
});

const ip = "127.0.0.1";
const port = 5000;

server.listen(port, ip, () => {
    console.log("Server started!");
});





