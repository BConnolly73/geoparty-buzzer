import React, { useContext } from "react";
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../../../Store/GeopartyStore';
import { Button } from 'react-bootstrap';

type Props = {
    style: object
};

const AdminControls = observer((props: Props) => {
    const GeopartyStore = useContext(GeopartyStoreContext);

    return (
        <Button
            onClick={() => GeopartyStore.emitUnlockButton()}
            style={props.style || {}}
        >Unlock</Button>
    );
});

export { AdminControls as default};