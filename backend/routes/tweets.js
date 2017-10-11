const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');

// Configuracion

router.get('/', function (req, res) {
    Tweet
        .find({})
        .populate('author')
        .then( tweets => res.status(200).json(tweets))
        .catch( err => res.status(503).json(err));
});

router.get('/:tweetId', function (req, res) {
    let tweetId = req.params.tweetId;
    Tweet
        .findById(tweetId)
        .then(function (t) {
            if (t){
                res.status(200).json(t)
            } else {
                res.status(404).json({ message: 'No existe el tweet!'})
            }
        })
        .catch( err => res.status(503).json(err));
});

router.post('/', function (req, res) {
    let data = req.body;
    let userId = '59dd5a6c2bea2b236bd78e62'; // Este dato sale del login.

    data.author = userId;

    let tweet = new Tweet(data);

    tweet
        .save()
        .then( t => res.status(201).json(t))
        .catch( err => res.status(503).json(err));
});

router.put('/', function (req, res) {

});

router.delete('/:tweetId', function (req, res) {
    let tweetId = req.params.tweetId;
    let userId = '59dd5a6c2bea2b236bd78e62'; // Este dato sale del login.

    Tweet
        .findById({ _id : tweetId})
        .then( function (t) {
            if(t){
                if (t.author == userId){
                    t
                        .remove()
                        .then( r => res.status(202).json({ message: 'borrado!'}))
                }  else {
                    res.status(403).json({ message: 'No sos el dueño'})
                }
            } else {
                res.status(404).json({ message: 'no existe el tweet que queres borrar'})
            }
        })



});

module.exports = router;