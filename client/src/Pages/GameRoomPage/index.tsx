import React, { useState, useEffect, useContext } from "react";
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../Store/GeopartyStore';

import { Container, Button, Form, ProgressBar } from 'react-bootstrap';
import AdminControls from './Components/AdminControls';
import { Participant } from "../../Types/participant";
import './style.scss';

const GameRoomPage = observer((props: any) => {
    const GeopartyStore = useContext(GeopartyStoreContext);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [username, setUsername] = useState<string>(process.env.NODE_ENV === 'production' ? localStorage.getItem('geoparty-username') || '' : '');

    // TODO: Replace me
    const getUrlParameter = (param: string) => {
        const search = window.location.search.substring(1);
        let parameters;
        try {
            parameters = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
        } finally {
            return typeof parameters !== 'undefined' ? parameters[param] : undefined;
        }
    }

    useEffect(() => {
        const isAdminParam = getUrlParameter('isAdmin') || false;
        if (isAdminParam === '1') {
            setIsAdmin(() => true);
        }
    }, []);

    const sendBuzzIn = () => {
        console.log('Click registered');
        if (username.trim() === '') {
            window.alert('No username. Cannot buzz in.');
            return;
        }

        if (!GeopartyStore.isBuzzInEnabled || GeopartyStore.earlyPressPenalty) {
            GeopartyStore.triggerEarlyPressPenalty(5);
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

            <Container className="early-click-message-container">
                <div>{GeopartyStore.earlyPressMessage}</div>
                {
                    GeopartyStore.earlyPressPenalty && <ProgressBar variant="danger" now={(GeopartyStore.earlyPressCurrentDuration / 5000) * 100}/>
                }
            </Container>

            <Container className="display-flex">
                <Button
                    disabled={!GeopartyStore.isBuzzInEnabled || GeopartyStore.earlyPressPenalty}
                    className="buzz-button"
                    onClick={(e: any) => {
                        console.log('Button', e);
                    }}
                >
                    <Container
                        className="inner-buzz-button"
                        onClick={(e: any) => {
                            console.log('Child Container', e);
                            sendBuzzIn();
                        }}
                    >
                    </Container>
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