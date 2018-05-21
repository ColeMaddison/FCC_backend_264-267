'use strict';

const http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

let getUrl = (url, pr) =>{
    http.get(url, (res) => {
        let result = "";
        res.on('data', (data) => {
            result += data;
        });

        res.on('end', () => {
            pr(result);
        });
    });
}

let p1 = new Promise((resolve, reject) => {
    getUrl(url1, resolve);
});

let p2 = new Promise((resolve, reject) => {
    getUrl(url2, resolve);
});

let p3 = new Promise((resolve, reject) => {
    getUrl(url3, resolve);
});

Promise.all([p1, p2, p3]).then(res => {
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
});