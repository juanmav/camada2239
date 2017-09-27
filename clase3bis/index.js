const express = require('express');
const app = express();
let usersList = require('./data');


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

    res.json(user);
});

app.post('/', function (req, res) {
   res.json({ message: 'Esto es un POST'});
});

app.put('/', function (req, res) {
    res.json({ message: 'Esto es un PUT'});
});

app.delete('/users/:userId', function (req, res) {
    let userId = req.params.userId;
    usersList =  usersList.filter( u => u.id != userId);
    res.json({ message: 'usuario id: ' + userId + 'Eliminado' });
});

app.listen(4000);
console.log('Mi servidor de express esta levantado en el puerto 4000');