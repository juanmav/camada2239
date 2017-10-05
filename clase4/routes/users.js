const express = require('express');
const router = express.Router();
let { usersList } = require('../data');
const userspostsRouter = require('./usersposts');

router.use('/:userId/posts', userspostsRouter);

router.get('/', function (req, res) {
    res.json(usersList);
});

router.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    console.log(userId);

    let user = usersList.find( function (u) {
        return u.id == userId;
    });

    if(user){
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'el user no existe!'});
    }
});

router.post('/', function (req, res) {
    let user = req.body;

    user.id = usersList.length + 1;

    usersList.push(user);

    res.status(201).json(user);
});

router.put('/:userId', function (req, res) {
    let updatedUser = req.body;
    let userId = req.params.userId;

    let oldUser = usersList.find( u => u.id == userId);

    if (oldUser){
        usersList =  usersList.filter( u => u.id != userId);
        usersList.push(updatedUser);
        // 204 no devuelve el body.
        res.status(204).json({ message: 'Actualizado! userId:' + userId});
    } else {
        res.status(404).json({ message: 'No existe el usuario!'});
    }

});

router.delete('/:userId', function (req, res) {
    let userId = req.params.userId;

    let user = usersList.find( u => u.id == userId);

    if(user){
        usersList =  usersList.filter( u => u.id != userId);
        res.status(202).json({ message: 'usuario id: ' + userId + 'Eliminado' });
    } else {
        res.status(404).json({ message: 'No existe el usuario!'});
    }

});

module.exports = router;