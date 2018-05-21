'use strict';

const http = require('http');
const qs = require('querystring');
const url = require('url');
let PORT = process.argv[2];

const server = http.createServer((req, res) => {
    // console.log(url.parse(req.url, true));
    let origin = url.parse(req.url, true);
    let iso = origin.query.iso;
    let d = new Date(iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.method === "GET"){
        if (origin.pathname === "/api/parsetime" ){
            res.write(`{\"hour\":${d.getHours()},\"minute\":${d.getMinutes()},\"second\":${d.getSeconds()}}`);
        } else if (origin.pathname === "/api/unixtime"){
            res.write(`{\"unixtime\":${d.getTime()}}`);
        } else {
            res.end();
        }
    } 
    res.end();
});

server.listen(PORT);