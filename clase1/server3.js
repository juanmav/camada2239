const fs = require('fs');
const http = require('http');

const server = http.createServer(function (request, response) {

    let stream = fs.createReadStream('./archivo.txt');
    stream.pipe(response);
});

server.listen(3000);
console.log('Servidor configurado y corriendo en el puerto 3000');