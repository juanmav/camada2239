const rp = require('request-promise');

let url = 'https://jsonplaceholder.typicode.com/posts/';

rp(url)
    .then(function (body) {
        let posts = JSON.parse(body);
        console.log(posts.length);

        // filter, find, map, reduce, forEach
        /*for (let i = 0;  i < posts.length; i++){
            console.log(posts[i].title);
        }*/

        posts.forEach(function (post) {
            console.log(post.title);
        });

        let titles = posts.map(function(post){
            return post.title;
        });

        console.log(posts[0]);
        console.log(titles[0]);

        /*let buscado;
        for (let i = 0; i < posts.length; i++){
            if (posts[i].id == 50){
                buscado = posts[i];
                break;
            }
        }
        console.log(buscado);*/

        let buscado = posts.find(function(post){
            return post.id == 50;
        });

        console.log(buscado);

        let postUsuario1 = posts.filter(function (post) {
            return post.userId == 1;
        });

        console.log(postUsuario1);

        let numeros = [ 43, 5, 65, 765, 8756, 456, 234 ];

        let sum = numeros.reduce(function(acc,value){
            return acc + value;
        },0)

        console.log(sum);
    });

