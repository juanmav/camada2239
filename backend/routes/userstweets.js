const express = require('express');
const router = express.Router({mergeParams: true});
const Tweet = require('../models/Tweet');
const User = require('../models/User');

router.get('/', function(req, res){
    let userId = req.params.userId;

    // TODO
    // Se deberia validar previamente que usuario
    // exista.

    Tweet
        .find({ author : userId})
        .then(function (tweets) {
            res.status(200).json(tweets);
        })
        .catch(err => res.status(503).json(err));

});

module.exports = router;