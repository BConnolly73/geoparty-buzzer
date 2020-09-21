import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../../../Store/GeopartyStore';
import { Participant } from './../../../../Types/participant';

import { Container, Button } from 'react-bootstrap';

type Props = {
    username: string,
};

const GameButton = observer((props: Props) => {
    const GeopartyStore = useContext(GeopartyStoreContext);
    const { username } = props;
    const [isMashBlocked, setIsMashBlocked] = useState<boolean>(false);
    const [mashCount, setMashCount] = useState<number>(0);

    // Setting a 3 second window where the user is blocked for mashing
    useEffect(() => {
        if (isMashBlocked) {
            window.alert('Mashing Detected. Clicking blocked for 3 seconds.')

            setTimeout(() => {
                console.log('Unsetting Mash Block');
                setIsMashBlocked(false);
                setMashCount(0);
            }, 3000);
        }
    }, [isMashBlocked, props]);

    // Resets mash block once button is enabled
    useEffect(() => {
        if (GeopartyStore.isBuzzInEnabled === true) {
            setMashCount(0);
        }
    }, [GeopartyStore.isBuzzInEnabled])

    const sendBuzzIn = () => {
        // No need to send if Buzzer is disabled or Blocked due to mashing
        if (!GeopartyStore.isBuzzInEnabled || isMashBlocked) {
            return;
        }

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
        <Container
            className='display-flex'
        >
            <Container
                onClick={() => {
                    if (isMashBlocked) {
                        return;
                    }

                    setMashCount(mashCount + 1);
                    if (mashCount > 5) {
                        setIsMashBlocked(true);
                    }
                }}
            >
                <Button
                    className={GeopartyStore.isBuzzInEnabled ? 'buzz-button' : 'buzz-button-disabled'}
                    onClick={sendBuzzIn}
                > BUZZ
                </Button>
            </Container>
        </Container>
    );
});

export { GameButton as default};