import React, { useContext } from "react";
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../../../Store/GeopartyStore';
import { Button } from 'react-bootstrap';

const AdminControls = observer(() => {
    const GeopartyStore = useContext(GeopartyStoreContext);

    return (
        <Button onClick={() => GeopartyStore.emitUnlockButton()}>Unlock</Button>
    )
});

export { AdminControls as default};