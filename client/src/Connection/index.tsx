import io from 'socket.io-client';

import { Store } from './../Store/GeopartyStore';
import { Participant } from './../Types/participant';

const socket = io('http://localhost:4001');

socket.on('acceptBuzzIn', (data: Participant) => {
    Store.setBuzzInEnabled(false);
    Store.setFirstBuzzer(data);
});

socket.on('unlockButton', (data: any) => {
    Store.setBuzzInEnabled(true);
    Store.setFirstBuzzer(undefined);
});

export { socket as default };