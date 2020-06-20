import io from 'socket.io-client';

import { Store } from './../Store/GeopartyStore';
import { Participant } from './../Types/participant';

console.log(process.env.NODE_ENV);
const socket = io(
    process.env.NODE_ENV === 'production' ?
    'https://calm-fjord-53303.herokuapp.com/' :
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