const request = require('request');

let url = 'https://jsonplaceholder.typicode.com/posts/1';

let myrequestpromise = function(url) {
    return new Promise(function(resolve, reject){
        request(url, function(err, response, body){
            if (err){
                reject(err)
            } else {
                resolve(body);
            }
        });
    })
};


myrequestpromise(url)
    .then(function (body) {
        console.log(body);
        let post = JSON.parse(body);
        return post.userId
    })
    .then(function (userId) {
        console.log(userId);
        let url2 = 'https://jsonplaceholder.typicode.com/users/' + userId;
        return myrequestpromise(url2);
    })
    .then(function (body2) {
        let user = JSON.parse(body2);
        console.log(user.name);
    })
    .catch(function (err) {
        console.log('Hubo un errrorrrrrrrrrrrr!!!!');
        console.log(err);
    });
