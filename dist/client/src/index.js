"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
const Pages_1 = __importDefault(require("./Pages"));
const Route_1 = __importDefault(require("./Components/Route"));
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null, Pages_1.default.map((page, key) => {
            const { exact, path, component, props } = page;
            return react_1.default.createElement(Route_1.default, { key: key, exact: exact, path: path, Component: component, pageProps: props });
        })))), document.getElementById('root'));
//# sourceMappingURL=index.js.map