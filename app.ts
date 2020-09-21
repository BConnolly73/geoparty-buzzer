import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import path from 'path';

const port = process.env.PORT || 4001;
const index = express.Router();
const app = express();

index.use(express.static(path.join(__dirname, 'client/build')));

index.get('*', (_: any, res: any) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.setMaxListeners(100);

io.on('connection', (socket: any) => {
    socket.on('userBuzzedIn', (data: any) =>{
        io.sockets.emit('acceptBuzzIn', data);
    });

    socket.on('clickedUnlockButton', (data: any) => {
        io.sockets.emit('unlockButton', data);
    });

    io.on('disconnection', (_: any) => {
        console.log('Someone disconnected');
    });
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});