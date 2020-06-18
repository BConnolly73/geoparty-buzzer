import { HomePage } from './HomePage';
import { CreateRoomPage } from './CreateRoomPage';
import { JoinRoomPage } from './JoinRoomPage';
import { GameRoomPage } from './GameRoomPage';

export default [{
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/game',
    exact: true,
    component: GameRoomPage
  },
  {
    path: '/create',
    exact: true,
    component: CreateRoomPage
  },
  {
    path: '/join',
    exact: true,
    component: JoinRoomPage
  }
];