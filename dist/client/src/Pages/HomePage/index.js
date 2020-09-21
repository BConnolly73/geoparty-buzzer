"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_1 = require("react-router");
const HomePage = () => {
    const history = react_router_1.useHistory();
    const onCreateRoomClick = () => {
        history.push('/create');
    };
    const onJoinRoomClick = () => {
        history.push('/join');
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, { fluid: true },
        react_1.default.createElement(react_bootstrap_1.Button, { onClick: onCreateRoomClick }, "Create A Room"),
        react_1.default.createElement(react_bootstrap_1.Button, { onClick: onJoinRoomClick }, "Join A Room")));
};
exports.HomePage = HomePage;
//# sourceMappingURL=index.js.map