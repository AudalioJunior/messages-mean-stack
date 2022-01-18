const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require("http");
const UserRoutes = require('./src/controllers/UserController');
const MessagesRoutes = require('./src/controllers/MessagesController');
const AuthRouter = require('./src/controllers/TokenController');
const { Server } = require('socket.io');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Socket Config
const serverHttp = http.createServer(app);
const io = new Server(serverHttp);


mongoose.connect('mongodb://localhost:27017/messages-system')
    .then(() => { console.log("Banco conectado!") })

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, get, values, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS, PUT');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/users', UserRoutes);
app.use('/messages', MessagesRoutes);
app.use('/token', AuthRouter);

io.on('connection', socket => {
    console.log("Usuário conectado com o socket")
    console.log(socket.id)
})

serverHttp.listen(3000, () => {
    console.log("Conectado na porta 3000")
});
