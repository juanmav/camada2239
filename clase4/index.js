const express = require('express');
const app = express();
let usersList = require('./data');
const bodyParser = require('body-parser');
const middleware = require('./middleware');


app.use(bodyParser.json());
app.use(middleware);


app.get('/', function(req, res){
    res.json(
        {
            appName: 'Servicio de Usuarios',
            endpoints: [
                {
                    name: 'Usuarios',
                    description: 'Servicios de usuarios ABM-L',
                    url: '/users'
                }
            ]
        }
    );
});

app.get('/users', function (req, res) {
    res.json(usersList);
});

app.get('/users/:userId', function (req, res) {
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

app.post('/users/', function (req, res) {
    let user = req.body;

    user.id = usersList.length + 1;

    usersList.push(user);

    res.status(201).json(user);
});

app.put('/users/:userId', function (req, res) {
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

app.delete('/users/:userId', function (req, res) {
    let userId = req.params.userId;

    let user = usersList.find( u => u.id == userId);

    if(user){
        usersList =  usersList.filter( u => u.id != userId);
        res.status(202).json({ message: 'usuario id: ' + userId + 'Eliminado' });
    } else {
        res.status(404).json({ message: 'No existe el usuario!'});
    }

});

app.listen(4000);
console.log('Mi servidor de express esta levantado en el puerto 4000');