const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/camada2239');

// Configuracion de rutas
const descriptorRouter = require('./routes/descriptor');
const usersRouter = require('./routes/users');
const tweetsRouter = require('./routes/tweets');
const loginRouter = require('./routes/login');
const authValidator = require('./routes/helpers/authValidator');

app.use('/', descriptorRouter);
app.use('/users', authValidator, usersRouter);
app.use('/tweets', authValidator, tweetsRouter);
app.use('/login', loginRouter);


app.listen(4000);
console.log('Express funcionando en el puerto 4000');