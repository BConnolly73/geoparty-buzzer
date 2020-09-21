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
exports.default = void 0;
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const GeopartyStore_1 = __importDefault(require("./../../../../Store/GeopartyStore"));
const react_bootstrap_1 = require("react-bootstrap");
const GameButton = mobx_react_1.observer((props) => {
    const GeopartyStore = react_1.useContext(GeopartyStore_1.default);
    const { username } = props;
    const [isMashBlocked, setIsMashBlocked] = react_1.useState(false);
    const [mashCount, setMashCount] = react_1.useState(0);
    // Setting a 3 second window where the user is blocked for mashing
    react_1.useEffect(() => {
        if (isMashBlocked) {
            window.alert('Mashing Detected. Clicking blocked for 3 seconds.');
            setTimeout(() => {
                console.log('Unsetting Mash Block');
                setIsMashBlocked(false);
                setMashCount(0);
            }, 3000);
        }
    }, [isMashBlocked, props]);
    // Resets mash block once button is enabled
    react_1.useEffect(() => {
        if (GeopartyStore.isBuzzInEnabled === true) {
            setMashCount(0);
        }
    }, [GeopartyStore.isBuzzInEnabled]);
    const sendBuzzIn = () => {
        // No need to send if Buzzer is disabled or Blocked due to mashing
        if (!GeopartyStore.isBuzzInEnabled || isMashBlocked) {
            return;
        }
        if (username.trim() === '') {
            window.alert('No username. Cannot buzz in.');
            return;
        }
        const particpant = {
            name: username
        };
        GeopartyStore.emitBuzzIn(particpant);
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, { className: 'display-flex' },
        react_1.default.createElement(react_bootstrap_1.Container, { onClick: () => {
                if (isMashBlocked) {
                    return;
                }
                setMashCount(mashCount + 1);
                if (mashCount > 5) {
                    setIsMashBlocked(true);
                }
            } },
            react_1.default.createElement(react_bootstrap_1.Button, { className: GeopartyStore.isBuzzInEnabled ? 'buzz-button' : 'buzz-button-disabled', onClick: sendBuzzIn }, " BUZZ"))));
});
exports.default = GameButton;
//# sourceMappingURL=index.js.map