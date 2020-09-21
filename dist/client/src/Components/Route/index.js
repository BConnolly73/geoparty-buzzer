"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./../Header"));
const Route = (props) => {
    const { exact, path, Component, pageProps } = props;
    const ComponentToRender = (_) => (react_1.default.createElement(Component, Object.assign({}, pageProps)));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(react_router_dom_1.Route, { exact: exact, path: path, component: () => ComponentToRender(pageProps) })));
};
exports.default = Route;
//# sourceMappingURL=index.js.map