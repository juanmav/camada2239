const requestpromise = require('request-promise');


function construirPost(postId){
    let url = 'https://jsonplaceholder.typicode.com/posts/' + postId;
    let post = {};

    return requestpromise(url)
        .then(function(body){
            post = JSON.parse(body);
            return post.userId;
        })
        .then(function (userId) {
            let url2 = 'https://jsonplaceholder.typicode.com/users/' + userId;
            return requestpromise(url2)
        })
        .then(function(body2){
            let user = JSON.parse(body2);
            delete post.userId;
            post.user = user;
            return post;
        })
}

Promise
    .all([construirPost(1), construirPost(2)])
    .then(function (posts) {
        console.log(posts);
    });





