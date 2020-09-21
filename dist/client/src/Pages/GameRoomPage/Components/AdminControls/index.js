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
const AdminControls = mobx_react_1.observer((props) => {
    const GeopartyStore = react_1.useContext(GeopartyStore_1.default);
    return (react_1.default.createElement(react_bootstrap_1.Button, { onClick: () => GeopartyStore.emitUnlockButton(), className: props.className || "" }, "Unlock"));
});
exports.default = AdminControls;
//# sourceMappingURL=index.js.map