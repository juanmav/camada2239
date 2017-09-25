const request = require('request');

let url = 'https://jsonplaceholder.typicode.com/posts/1';

request(url, function(err, response, body){
    let post = JSON.parse(body);
    console.log(post);
    console.log(post.userId);
    let url2 = 'https://jsonplaceholder.typicode.com/users/' + post.userId;

    request(url2, function(err2, response2, body2){
       let user = JSON.parse(body2);
       console.log(user);
       console.log(user.name);
    });
});