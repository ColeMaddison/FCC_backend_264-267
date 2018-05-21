'use strict';

const http = require('http');
const fs = require('fs');
let PORT = process.argv[2];
let file = process.argv[3];

const server = http.createServer((req, res) => {
    let stream = fs.createReadStream(file);
    stream.pipe(res);
});



server.listen(PORT);