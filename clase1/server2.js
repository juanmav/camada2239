const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {

    console.log('1. Voy abrir el archivo');
    fs.readFile('./archivo.txt', function(err, data){
        console.log('3. Envio la data del archivo');
        response.writeHead(200, { "Content-Type": "text/html"});
        response.write(data.toString());
        response.end();
    });
    console.log('2. Ya pedi la apertura');
});


server.listen(3000);
console.log('Servidor configurado y corriendo en el puerto 3000');