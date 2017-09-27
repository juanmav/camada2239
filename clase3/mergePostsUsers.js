const requestPromise = require('request-promise');
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

let p_users = requestPromise(URL_USERS);
let p_posts = requestPromise(URL_POSTS);

Promise
    .all([p_users, p_posts])
    .then(function(values){
        let users = JSON.parse(values[0]);
        let posts = JSON.parse(values[1]);

        let merged = posts.map(p => {
           let newPost = Object.assign({}, p);
           let user = users.find( u => u.id === newPost.userId);

           newPost.user = user;
           delete newPost.userId;
           return newPost;
        });

        console.log(merged[0]);
        console.log(posts[0]);

    });