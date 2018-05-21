'use strict';

const http = require('http');
let PORT = process.argv[2];

const server = http.createServer((req, res) => {
    if(req.method === "POST"){
        let body = "";
        req.on('data', (data)=>{
            body += data.toString();
        });
        req.on('end', ()=>{
            body = body.toUpperCase();
            res.write(body);
        });
    }
});

server.listen(PORT);