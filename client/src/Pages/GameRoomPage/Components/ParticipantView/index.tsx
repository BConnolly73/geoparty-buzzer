import React, { useContext } from "react";
import { observer } from 'mobx-react';

import GeopartyStoreContext from './../../../../Store/GeopartyStore';
import { Participant } from './../../../../Types/participant';

import {Container } from 'react-bootstrap';

const ParticipantView = observer(() => {
    const GeopartyStore = useContext(GeopartyStoreContext);

    return (
        <Container>
            <h3>Participants</h3>
            {GeopartyStore.participants.map((participant: Participant, index: Number) => (
                <div>Part {index} - {participant.name}</div>
            ))}
        </Container>
    )
});

export { ParticipantView as default};