"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Store = void 0;
const mobx_1 = require("mobx");
const react_1 = require("react");
const Connection_1 = __importDefault(require("./../Connection"));
class GeopartyStore {
    constructor() {
        this.buzzInEnabled = true;
        this.firstBuzzer = undefined;
        this.emitBuzzIn = (participant) => {
            Connection_1.default.emit('userBuzzedIn', participant);
        };
        this.emitUnlockButton = () => {
            Connection_1.default.emit('clickedUnlockButton', {});
        };
        this.setBuzzInEnabled = (enabled) => {
            this.buzzInEnabled = enabled;
        };
        this.setFirstBuzzer = (data, allowOverwrite = false) => {
            if (this.firstBuzzer === undefined || allowOverwrite) {
                this.firstBuzzer = data;
            }
        };
    }
    get isBuzzInEnabled() {
        return this.buzzInEnabled;
    }
}
__decorate([
    mobx_1.observable
], GeopartyStore.prototype, "buzzInEnabled", void 0);
__decorate([
    mobx_1.observable
], GeopartyStore.prototype, "firstBuzzer", void 0);
__decorate([
    mobx_1.action
], GeopartyStore.prototype, "emitBuzzIn", void 0);
__decorate([
    mobx_1.action
], GeopartyStore.prototype, "emitUnlockButton", void 0);
__decorate([
    mobx_1.action
], GeopartyStore.prototype, "setBuzzInEnabled", void 0);
__decorate([
    mobx_1.computed
], GeopartyStore.prototype, "isBuzzInEnabled", null);
__decorate([
    mobx_1.action
], GeopartyStore.prototype, "setFirstBuzzer", void 0);
;
const Store = new GeopartyStore();
exports.Store = Store;
const GeopartyStoreContext = react_1.createContext(Store);
exports.default = GeopartyStoreContext;
//# sourceMappingURL=GeopartyStore.js.map