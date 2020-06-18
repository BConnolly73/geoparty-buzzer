import io from 'socket.io-client';
import firebase from 'firebase';

import { Store } from './../Store/GeopartyStore';
import { Participant } from './../Types/participant';

const socket = io('http://localhost:4001');

socket.on('disableButton', (data: any) => {
    console.log('Disabling button?');
    Store.setBuzzInEnabled(false);
});

socket.on('unlockButton', (data: any) => {
    Store.setBuzzInEnabled(true);
});

socket.on('addParticipant', (data: Participant) => {
    Store.addParticipant(data);
})

const config = {
    apiKey: "AIzaSyAxpVP7old-7nWs-53dGejHMoXeMId5uyg",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://geoparty-33cff.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};

firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

export {
    database,
    socket as default
};