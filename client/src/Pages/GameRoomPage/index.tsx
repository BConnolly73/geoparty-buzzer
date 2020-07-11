import React, { useState, useEffect, useContext } from "react";
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../Store/GeopartyStore';

import { Container, Button, Form } from 'react-bootstrap';
import AdminControls from './Components/AdminControls';
import { Participant } from "../../Types/participant";
import './style.scss';

const GameRoomPage = observer((props: any) => {
    const GeopartyStore = useContext(GeopartyStoreContext);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [username, setUsername] = useState<string>(process.env.NODE_ENV === 'production' ? localStorage.getItem('geoparty-username') || '' : '');

    useEffect(() => {
        setIsAdmin(props.isAdmin || false);
    }, [props]);

    const sendBuzzIn = () => {
        if (username.trim() === '') {
            window.alert('No username. Cannot buzz in.');
            return;
        }

        const particpant: Participant = {
            name: username
        };

        GeopartyStore.emitBuzzIn(particpant);
    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => {
                            localStorage.setItem('geoparty-username', e.target.value);
                            setUsername(e.target.value)
                        }}
                    />
                    <Form.Text className="text-muted">
                        {username === '' && "*Required"}
                    </Form.Text>
                </Form.Group>
            </Form>

            <Container
                className="display-flex"
            >
                <Button
                    disabled={!GeopartyStore.isBuzzInEnabled}
                    className="buzz-button"
                    onClick={sendBuzzIn}
                > BUZZ
                </Button>
            </Container>

            <Container
                style={{
                    display: 'flex',
                    paddingTop: '1.5em'
                }}
            >
                {isAdmin && ( <AdminControls className="auto-margin"/> )}
            </Container>

            <Container className="buzzer-container">
                <div>Buzz in Winner:</div>
                <div>{typeof GeopartyStore.firstBuzzer !== 'undefined' ? GeopartyStore.firstBuzzer.name : ''}</div>
            </Container>

        </Container>
    )
});

export { GameRoomPage };