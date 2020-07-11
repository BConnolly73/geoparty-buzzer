import { GameRoomPage } from './GameRoomPage';

export default [{
    path: '/',
    exact: true,
    component: GameRoomPage
  },
  {
    path: '/game',
    exact: true,
    component: GameRoomPage
  },
  {
    path: '/game-admin',
    exact: true,
    component: GameRoomPage,
    props: {
      isAdmin: true
    }
  }
];