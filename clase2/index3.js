const requestpromise = require('request-promise');

let url = 'https://jsonplaceholder.typicode.com/posts/1';

console.log('Voy a llamar al servidor');

requestpromise(url)
    .then(function(body){
        let post = JSON.parse(body);
        console.log(post);
        console.log(post.userId);
        return post.userId;
    })
    .then(function (userId) {
        let url2 = 'https://jsonplaceholder.typicode.com/users/' + userId;
        return requestpromise(url2)
    })
    .then(function(body2){
        let user = JSON.parse(body2);
        console.log(user.name);
    });

console.log('Ya llame al servidor');