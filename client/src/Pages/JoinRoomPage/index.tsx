import React from "react";
import { observer } from 'mobx-react';

import Socket from './../../Connection';
import { Participant } from './../../Types/participant';

import { Container } from 'react-bootstrap';
import { GameForm } from './../../Components/GameForm';


const JoinRoomPage = observer(() => {

    const onSubmit = (username: string, gameCode: string) => {
        const participant: Participant = {
            name: username
        };

        Socket.emit('participantJoined', participant);
    };

    return (
        <Container>
            <h1>Join Room</h1>
            <GameForm
                onSubmit={onSubmit}
                requireUsername={true}
            />
        </Container>
    )
});

export { JoinRoomPage };