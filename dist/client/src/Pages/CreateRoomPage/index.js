"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomPage = void 0;
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const GameForm_1 = require("./../../Components/GameForm");
const Connection_1 = __importDefault(require("./../../Connection"));
const CreateRoomPage = () => {
    const onSubmit = (_, roomCode) => {
        console.log('Sending Create Room with code:', roomCode);
        Connection_1.default.emit('createGame', { roomCode });
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement("h1", null, "Create Room"),
        react_1.default.createElement(GameForm_1.GameForm, { onSubmit: onSubmit })));
};
exports.CreateRoomPage = CreateRoomPage;
//# sourceMappingURL=index.js.map