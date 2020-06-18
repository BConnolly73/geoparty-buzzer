const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    socket.on('joinGame', ({ username, gameCode }) => {
        console.log(`${username} is trying to connect to to ${gameCode}`);
        attemptToConnect(socket, username, gameCode);
    });

    socket.on('createGame', (data) => {
        console.log('Create game on server', data);
        createGame(socket, data);
    });

    socket.on('clickedBuzz', (data) =>{
        io.sockets.emit('disableButton', data);
    });

    socket.on('clickedUnlockButton', (data) => {
        io.sockets.emit('unlockButton', data);
    });

    socket.on('participantJoined', (data) => {
        io.sockets.emit('addParticipant', data);
    })

    io.on('disconnection', (socket) => {
        console.log('Someone disconnected');
    });
});



server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const attemptToConnect = (socket, username, gameCode,) => {
    //socket.join(gameCode);
    socket.emit('attemptConnection', {username, gameCode});
}

const createGame = (socket, data) => {
    socket.emit('clientCreateGame', data);
}