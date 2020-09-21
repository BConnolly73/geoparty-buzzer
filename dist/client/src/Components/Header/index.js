"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_1 = require("react-router");
const Header = () => {
    const history = react_router_1.useHistory();
    const onHomeClick = () => {
        history.push('/');
    };
    return (react_1.default.createElement(react_bootstrap_1.Navbar, { bg: "dark", variant: "dark" },
        react_1.default.createElement(react_bootstrap_1.Container, { fluid: true },
            react_1.default.createElement(react_bootstrap_1.NavbarBrand, { onClick: onHomeClick }, "GeoParty Buzzer"))));
};
exports.default = Header;
//# sourceMappingURL=index.js.map