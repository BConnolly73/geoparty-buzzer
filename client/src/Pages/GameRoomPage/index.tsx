import React, { useState, useEffect, useContext } from "react";
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../Store/GeopartyStore';

import { Container, Button } from 'react-bootstrap';
import AdminControls from './Components/AdminControls';
import ParticipantView from './Components/ParticipantView';

const GameRoomPage = observer(() => {
    const GeopartyStore = useContext(GeopartyStoreContext);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [gameCode, setGameCode] = useState<string>('');

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
        setGameCode(getUrlParameter('gameCode') || '');
        const isAdminParam = getUrlParameter('isAdmin');
        if (isAdminParam === '1') {
            setIsAdmin(() => true);
        }
    }, []);

    return (
        <Container>
            {<h1>Welcome to Game - {gameCode}</h1>}

            <Button
                disabled={!GeopartyStore.isBuzzInEnabled}
                onClick={() => {
                    GeopartyStore.emitBuzzIn();
                }}
            >
                BUZZ
            </Button>

            {isAdmin && (
                <AdminControls />
            )}

            <div>
                <ParticipantView />
            </div>
        </Container>
    )
});

export { GameRoomPage };