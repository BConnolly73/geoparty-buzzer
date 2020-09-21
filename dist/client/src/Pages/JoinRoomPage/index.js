"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRoomPage = void 0;
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const Connection_1 = __importDefault(require("./../../Connection"));
const react_bootstrap_1 = require("react-bootstrap");
const GameForm_1 = require("./../../Components/GameForm");
const JoinRoomPage = mobx_react_1.observer(() => {
    const onSubmit = (username, gameCode) => {
        const participant = {
            name: username
        };
        Connection_1.default.emit('participantJoined', participant);
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement("h1", null, "Join Room"),
        react_1.default.createElement(GameForm_1.GameForm, { onSubmit: onSubmit, requireUsername: true })));
});
exports.JoinRoomPage = JoinRoomPage;
//# sourceMappingURL=index.js.map