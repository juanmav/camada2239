const express = require('express');
const router = express.Router({ mergeParams: true});
const Comment = require('../models/Comment');
const Tweet = require('../models/Tweet');

// Get List
// Add one
router.get('/', function (req, res) {
    let tweetId = req.params.tweetId;

    // TODO deberia validar que el Tweet exista previamente.
    Comment
        .find({ tweet: tweetId})
        .populate(['tweet', 'author'])
        .then( tweets => res.status(200).json(tweets));
});

router.post('/', function (req, res) {
    let tweetId = req.params.tweetId;
    let userId = req.user._id;
    let data = req.body;

    Tweet
        .findById(tweetId)
        .then(function (t) {
            if(t){
                data.tweet = tweetId;
                data.author = userId;
                let comment = new Comment(data);
                comment
                    .save()
                    .then(r => res.status(201).json(r));
            } else {
                res.status(404).json({ message: 'No existe!'});
            }
        })
        .catch( err => res.status(503).json(err));
});

module.exports = router;