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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRoomPage = void 0;
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const GeopartyStore_1 = __importDefault(require("./../../Store/GeopartyStore"));
const react_bootstrap_1 = require("react-bootstrap");
const AdminControls_1 = __importDefault(require("./Components/AdminControls"));
const Button_1 = __importDefault(require("./Components/Button"));
require("./style.scss");
const GameRoomPage = mobx_react_1.observer((props) => {
    const GeopartyStore = react_1.useContext(GeopartyStore_1.default);
    const [isAdmin, setIsAdmin] = react_1.useState(false);
    const [username, setUsername] = react_1.useState(process.env.NODE_ENV === 'production' ? localStorage.getItem('geoparty-username') || '' : '');
    react_1.useEffect(() => {
        setIsAdmin(props.isAdmin || false);
    }, [props]);
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement(react_bootstrap_1.Form, null,
            react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "username" },
                react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Username"),
                react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "Enter username", value: username, onChange: (e) => {
                        localStorage.setItem('geoparty-username', e.target.value);
                        setUsername(e.target.value);
                    } }),
                react_1.default.createElement(react_bootstrap_1.Form.Text, { className: "text-muted" }, username === '' && "*Required"))),
        react_1.default.createElement(Button_1.default, { username: username }),
        react_1.default.createElement(react_bootstrap_1.Container, { style: {
                display: 'flex',
                paddingTop: '1.5em'
            } }, isAdmin && (react_1.default.createElement(AdminControls_1.default, { className: "auto-margin" }))),
        react_1.default.createElement(react_bootstrap_1.Container, { className: "buzzer-container" },
            react_1.default.createElement("div", null, "Buzz in Winner:"),
            react_1.default.createElement("div", null, typeof GeopartyStore.firstBuzzer !== 'undefined' ? GeopartyStore.firstBuzzer.name : ''))));
});
exports.GameRoomPage = GameRoomPage;
//# sourceMappingURL=index.js.map