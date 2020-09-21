"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameForm = void 0;
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const GameForm = (props) => {
    const [username, setUsername] = react_1.useState('');
    const [gameCode, setGameCode] = react_1.useState('');
    return (react_1.default.createElement(react_bootstrap_1.Form, null,
        props.requireUsername && (react_1.default.createElement(react_bootstrap_1.FormGroup, { as: react_bootstrap_1.Row },
            react_1.default.createElement(react_bootstrap_1.FormLabel, { column: true, sm: "2" }, "Username"),
            react_1.default.createElement(react_bootstrap_1.Col, { sm: "10" },
                react_1.default.createElement(react_bootstrap_1.FormControl, { type: "string", placeholder: "Enter Username", value: username, onChange: (e) => {
                        setUsername(e.target.value);
                    } })))),
        react_1.default.createElement(react_bootstrap_1.FormGroup, { as: react_bootstrap_1.Row, controlId: "formPlaintextPassword" },
            react_1.default.createElement(react_bootstrap_1.FormLabel, { column: true, sm: "2" }, "Game Code"),
            react_1.default.createElement(react_bootstrap_1.Col, { sm: "10" },
                react_1.default.createElement(react_bootstrap_1.FormControl, { type: "string", placeholder: "Enter Game Code", value: gameCode, onChange: (e) => {
                        setGameCode(e.target.value);
                    } }))),
        react_1.default.createElement(react_bootstrap_1.Button, { onClick: () => props.onSubmit(username, gameCode) }, "Enter")));
};
exports.GameForm = GameForm;
//# sourceMappingURL=index.js.map