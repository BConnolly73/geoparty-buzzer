import React, { useContext } from "react";
import { observer } from 'mobx-react';
import GeopartyStoreContext from './../../../../Store/GeopartyStore';
import { Button } from 'react-bootstrap';

type Props = {
    className: string
};

const AdminControls = observer((props: Props) => {
    const GeopartyStore = useContext(GeopartyStoreContext);

    return (
        <Button
            onClick={() => GeopartyStore.emitUnlockButton()}
            className={props.className || ""}
        >Unlock</Button>
    );
});

export { AdminControls as default};