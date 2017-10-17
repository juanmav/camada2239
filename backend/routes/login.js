const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

/**
 * {
 *      username: 'pepito',
 *      password: '12345'
 * }
 * */

router.post('/', function (req, res) {
    let data = req.body;

    console.log(data);

    User
        .findOne({ username: data.username})
        .then(function (user) {
            if (user && user.password == data.password){
                let userJson = user.toJSON();
                delete userJson.password;
                let token = jwt.sign(userJson, 'misecretoocultoalmundo');
                res.status(200).json(token);
            } else { // Usuario o password incorrectos.
                res.status(403).json({ message: 'usuario o password incorrectos'})
            }
        })
});

module.exports = router;