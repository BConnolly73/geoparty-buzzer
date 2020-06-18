import { observable, action, computed } from "mobx"
import { createContext } from 'react';
import Socket from './../Connection';

import { Participant } from './../Types/participant';

class GeopartyStore {
    @observable buzzInEnabled: boolean = true;
    @observable participants: Array<Participant> = [];

    @action
    emitBuzzIn = () => {
        Socket.emit('clickedBuzz', {});
    }

    @action
    emitUnlockButton = () => {
        Socket.emit('clickedUnlockButton', {});
    }

    @action
    setBuzzInEnabled = (enabled: boolean) => {
        this.buzzInEnabled = enabled;
    }

    @computed
    get isBuzzInEnabled(): boolean {
        return this.buzzInEnabled;
    }

    @action
    addParticipant = ((participant: Participant) => {
        this.participants.push(participant);
    });
};

const Store = new GeopartyStore();
const GeopartyStoreContext = createContext(Store);

export {
    Store,
    GeopartyStoreContext as default
};