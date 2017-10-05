const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {

    res.json({
        AppName: 'Users en MongoDB',
        endpoints: [
            {
                name: 'Users',
                url: './users'
            }
        ]
    })

});

// Rutas
const userRouter = require('./routes/users');

app.use('/users/', userRouter);

app.listen(4000);
console.log('Mi servidor de express esta levantado en el puerto 4000');