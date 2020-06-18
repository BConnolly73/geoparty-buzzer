import React from "react";
import { Container } from 'react-bootstrap';
import { GameForm } from './../../Components/GameForm';
import socket from './../../Connection';

const CreateRoomPage = () => {
    const onSubmit = (_: any, roomCode: string) => {
        console.log('Sending Create Room with code:', roomCode);
        socket.emit('createGame', {roomCode});
    }

    return (
        <Container>
            <h1>Create Room</h1>
            <GameForm
                onSubmit={onSubmit}
            />
        </Container>
    );
};

export { CreateRoomPage };