import io from 'socket.io-client';

import { Store } from './../Store/GeopartyStore';
import { Participant } from './../Types/participant';

const socket = io(
    process.env.NODE_ENV === 'production' ?
    'https://geoparty-trivia.herokuapp.com/' :
    'http://localhost:4001'
);

socket.on('acceptBuzzIn', (data: Participant) => {
    Store.setBuzzInEnabled(false);
    Store.setFirstBuzzer(data);
});

socket.on('unlockButton', () => {
    Store.setBuzzInEnabled(true);
    Store.setFirstBuzzer(undefined, true);
});

export { socket as default };