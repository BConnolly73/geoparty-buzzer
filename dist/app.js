"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const path_1 = __importDefault(require("path"));
const port = process.env.PORT || 4001;
const index = express_1.default.Router();
const app = express_1.default();
index.use(express_1.default.static(path_1.default.join(__dirname, 'client/build')));
index.get('*', (_, res) => {
    res.sendFile(path_1.default.join(__dirname + '/client/build/index.html'));
});
app.use(index);
const server = http_1.default.createServer(app);
const io = socket_io_1.default(server);
io.setMaxListeners(100);
io.on('connection', (socket) => {
    socket.on('userBuzzedIn', (data) => {
        io.sockets.emit('acceptBuzzIn', data);
    });
    socket.on('clickedUnlockButton', (data) => {
        io.sockets.emit('unlockButton', data);
    });
    io.on('disconnection', (_) => {
        console.log('Someone disconnected');
    });
});
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=app.js.map