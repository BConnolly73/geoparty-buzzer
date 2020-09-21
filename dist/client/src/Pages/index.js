"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameRoomPage_1 = require("./GameRoomPage");
exports.default = [{
        path: '/',
        exact: true,
        component: GameRoomPage_1.GameRoomPage
    },
    {
        path: '/game',
        exact: true,
        component: GameRoomPage_1.GameRoomPage
    },
    {
        path: '/game-admin',
        exact: true,
        component: GameRoomPage_1.GameRoomPage,
        props: {
            isAdmin: true
        }
    }
];
//# sourceMappingURL=index.js.map