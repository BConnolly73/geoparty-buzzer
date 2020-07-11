const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const port = process.env.PORT || 4001;
const index = express.Router();
const app = express();

index.use(express.static(path.join(__dirname, 'client/build')));

index.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    socket.on('userBuzzedIn', (data) =>{
        io.sockets.emit('acceptBuzzIn', data);
    });

    socket.on('clickedUnlockButton', (data) => {
        io.sockets.emit('unlockButton', data);
    });

    io.on('disconnection', (socket) => {
        console.log('Someone disconnected');
    });
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});