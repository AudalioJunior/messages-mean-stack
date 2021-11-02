const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserRoutes = require('./src/controllers/UserController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/messages-system')
.then(() => { console.log("Banco conectado!")})

app.use('/users', UserRoutes);


app.listen(3000);