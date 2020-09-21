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
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
;
const AlertModel = (props) => {
    const { title, body, buttonText } = props;
    const [show, setShow] = react_1.useState(props.show);
    const handleClose = () => setShow(false);
    // TODO: Fix
    react_1.useEffect(() => {
        if (props.show !== show) {
            setShow(props.show);
        }
    }, [props, show]);
    return (react_1.default.createElement(react_bootstrap_1.Modal, { show: show, onHide: handleClose, backdrop: false },
        react_1.default.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
            react_1.default.createElement(react_bootstrap_1.Modal.Title, null, title)),
        react_1.default.createElement(react_bootstrap_1.Modal.Body, null, body),
        react_1.default.createElement(react_bootstrap_1.Modal.Footer, null,
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "secondary", onClick: handleClose }, buttonText))));
};
exports.default = AlertModel;
//# sourceMappingURL=index.js.map