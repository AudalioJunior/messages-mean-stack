const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserRoutes = require('./src/controllers/UserController');
const MessagesRoutes = require('./src/controllers/MessagesController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/messages-system')
.then(() => { console.log("Banco conectado!")})

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


app.use('/users', UserRoutes);
app.use('/messages', MessagesRoutes);

app.listen(3000);