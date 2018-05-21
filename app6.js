const net = require('net');
let PORT = process.argv[2];

let server = net.createServer((socket) => {
        let date = new Date();
        let month = (date.getMonth()+1) < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
        socket.write(`${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
        socket.end("\n");  
});

server.listen(PORT);