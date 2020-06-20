import React, { useState, useEffect, useContext } from "react";
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../Store/GeopartyStore';

import { Container, Button, Form } from 'react-bootstrap';
import AdminControls from './Components/AdminControls';
import { Participant } from "../../Types/participant";

const GameRoomPage = observer(() => {
    const GeopartyStore = useContext(GeopartyStoreContext);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');

    const getUrlParameter = (param: string) => {
        const search = window.location.search.substring(1);
        let parameters;
        try {
            parameters = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
        } finally {
            return parameters[param];
        }
    }

    useEffect(() => {
        const isAdminParam = getUrlParameter('isAdmin');
        if (isAdminParam === '1') {
            setIsAdmin(() => true);
        }
    }, []);

    const onBuzzButtonClick = () => {
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
            <h1>Welcome to Geoparty</h1>

            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                    <Form.Text className="text-muted">
                        {username === '' && "*Required"}
                    </Form.Text>
                </Form.Group>
            </Form>
            <Container
                style={{
                    display: 'flex',
                }}
            >

<           Button
                disabled={!GeopartyStore.isBuzzInEnabled}
                onClick={onBuzzButtonClick}
                style={{
                    borderRadius: '50%',
                    height: '6em',
                    width: '6em',
                    fontSize: '2em',
                    color: 'white',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    margin: 'auto',
                    boxShadow: '0.2em -0.2em #404040'
                }}
            >
                BUZZ
            </Button>

            </Container>

            <Container
                style={{
                    display: 'flex',
                    paddingTop: '1.5em'
                }}
            >
                {isAdmin && ( <AdminControls style={{margin: 'auto'}}/> )}
            </Container>

            <Container style={{
                    display: 'flex',
                    paddingTop: '1.5em'
            }}>
                <div>Buzz in Winner:</div>
                <div>{typeof GeopartyStore.firstBuzzer !== 'undefined' ? GeopartyStore.firstBuzzer.name : ''}</div>
            </Container>

        </Container>
    )
});

export { GameRoomPage };