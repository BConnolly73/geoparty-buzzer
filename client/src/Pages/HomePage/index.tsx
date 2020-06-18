import React from "react";
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router'

const HomePage = () => {
    const history = useHistory();

    const onCreateRoomClick = () => {
        history.push('/create');
    }

    const onJoinRoomClick = () => {
        history.push('/join');
    }

    return (
        <Container fluid={true}>
            <Button onClick={onCreateRoomClick}>Create A Room</Button>
            <Button onClick={onJoinRoomClick}>Join A Room</Button>
        </Container>
    )
};

export { HomePage };