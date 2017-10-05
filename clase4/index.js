const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const middleware = require('./middleware');

app.use(bodyParser.json());
//app.use(middleware);

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const configRouter = require('./routes/config');

app.use('/', configRouter);
app.use('/users/', usersRouter);
app.use('/posts/', postsRouter);

app.listen(4000);
console.log('Mi servidor de express esta levantado en el puerto 4000');