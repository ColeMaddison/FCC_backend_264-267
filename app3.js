'use strict';

const mod = require('./app2');

let dir = process.argv[2];
let ext = process.argv[3];

mod(dir, ext, function (err, data) { 
    if(err) return err;
    data.forEach(element => console.log(element));
 });
