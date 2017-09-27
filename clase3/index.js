const requestPromise = require('request-promise');

function getPosts() {
    const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
    const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

    requestPromise(URL_POSTS)
        .then(responsePosts => JSON.parse(responsePosts))
        .then(posts => {
            let promises = posts.map(post => {
                return requestPromise(`${URL_USERS}/${post.userId}`)
                    .then(responseUser => {
                        post.user = JSON.parse(responseUser);
                        return post;
                    });
            });
            return Promise.all(promises);
        })
        .then(posts => {
            console.log(posts[0])
        })
}

getPosts();
