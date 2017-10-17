const express = require('express');
const router = express.Router();
const User = require('../models/User');
const usersTweetsRouter = require('./userstweets');

router.use('/:userId/tweets', usersTweetsRouter);

router.get('/', function (req, res) {
    User
        .find({})
        .then( users => res.json(users));
});

router.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    User
        .findOne({ _id: userId})
        .then(user => res.json(user))
        .catch( error => res.status(503).json({ message: 'Fallo algo!'}));
});

router.post('/',function (req, res) {
    let data = req.body;
    let user = new User(data);
    user
        .save()
        .then( u => res.status(201).json(u))
        .catch( err => res.status(400).json(err));
});

router.put('/:userId',function (req, res) {
    let data = req.body;
    let userId = req.params.userId;

    User
        .findOneAndUpdate({ _id: userId }, { $set: data })
        .then( r => res.status(204).json(r))
        .catch( err => res.status(400).json(err));

});

router.delete('/:userId',function (req, res) {
    let userId = req.params.userId;

    User
        .findOneAndRemove({ _id: userId })
        .then(r => res.status(202).json(r))
        .catch( err => res.status(503).json(err));

});

module.exports = router;