'use strict';

const http = require('http');
let url = process.argv[2];

http.get(url, (res) => {
    let result = "";
    res.on('data', (data) => {
        result += data;
    });

    res.on('end',() => {
        console.log(`${result.toString().length}\n${result.toString()}`);

    });
});