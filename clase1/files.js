const fs = require('fs');

//const file = fs.readFileSync('./archivo.txt');
//console.log(file.toString());


console.log('1');
fs.readFile('archivo.txt', function(err, data){
    console.log('2');
    console.log(data.toString());
});
console.log('3');