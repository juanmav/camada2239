const express = require('express');
const router = express.Router();
const { MongoClient, ObjectID } = require('mongodb');

let url = 'mongodb://localhost:27017/camada2239';
let db;

MongoClient.connect(url, function (err,database) {
    if(err){
        throw err;
    }
    db = database;
    console.log('Me conecte a mongoDB');
});

router.get('/', function (req, res) {
    db.collection('users').find({}).toArray(function (err, users) {
        if(err){
            res.status(503).json({ message: 'exploto!'});
        } else {
            res.json(users);
        }
    })

});

router.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    let o_userId = new ObjectID(userId);

    db.collection('users').findOne({ _id: o_userId}, function (err, user) {
        res.json(user);
    })
});

router.post('/', function (req, res) {
    let data = req.body;

    // validar data.

    db.collection('users').insertOne(data, function (err, result) {
        res.json(result);
    })
});

router.put('/:userId', function (req, res) {
    let userId = req.params.userId;
    let o_userId = new ObjectID(userId);
    let data = req.body;

    delete data._id;

    db.collection('users').updateOne(
        { _id: o_userId },
        { $set : data },
        function (err, result) {
            res.json(result);
        })

});

router.delete('/:userId', function (req, res) {
    let userId = req.params.userId;
    let o_userId = new ObjectID(userId);

    db.collection('users').deleteOne({ _id: o_userId}, function (err, result) {
        res.json(result);
    })

});

module.exports = router;