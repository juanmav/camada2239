let fetch = require('node-fetch');

console.log('1. Voy al servidor a pedir los posts');

fetch(
    'https://jsonplaceholder.typicode.com/posts'
)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log('2. Voy a mostrar la cantidad');
       console.log(data.length);
    });

console.log('3. Ya mostre la cantidad');