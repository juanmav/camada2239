const http = require('http');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const server = http.createServer(function (request, response) {
    let temp = getRandomInt(1, 50);
    response.writeHead(200, { "Content-Type": "text/html"});
    response.write('Servicio Temp en BS AS ');
    response.write('Temperatura: ' + temp);
    response.end();
});


server.listen(3000);
console.log('Servidor configurado y corriendo en el puerto 3000');