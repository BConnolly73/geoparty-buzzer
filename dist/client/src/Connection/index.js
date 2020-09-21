"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const GeopartyStore_1 = require("./../Store/GeopartyStore");
const socket = socket_io_client_1.default(process.env.NODE_ENV === 'production' ?
    'https://geoparty-trivia.herokuapp.com/' :
    'http://localhost:4001');
exports.default = socket;
socket.on('acceptBuzzIn', (data) => {
    GeopartyStore_1.Store.setBuzzInEnabled(false);
    GeopartyStore_1.Store.setFirstBuzzer(data);
});
socket.on('unlockButton', () => {
    GeopartyStore_1.Store.setBuzzInEnabled(true);
    GeopartyStore_1.Store.setFirstBuzzer(undefined, true);
});
//# sourceMappingURL=index.js.map