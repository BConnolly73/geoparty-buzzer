import { observable, action, computed } from "mobx"
import { createContext } from 'react';
import Socket from './../Connection';

import { Participant } from './../Types/participant';

class GeopartyStore {
    @observable buzzInEnabled: boolean = true;
    @observable firstBuzzer: Participant | undefined = undefined;

    @action
    emitBuzzIn = (participant: Participant): void => {
        Socket.emit('userBuzzedIn', participant);
    }

    @action
    emitUnlockButton = (): void => {
        Socket.emit('clickedUnlockButton', {});
    }

    @action
    setBuzzInEnabled = (enabled: boolean): void => {
        this.buzzInEnabled = enabled;
    }

    @computed
    get isBuzzInEnabled(): boolean {
        return this.buzzInEnabled;
    }

    @action
    setFirstBuzzer = (data: Participant | undefined, allowOverwrite: boolean = false): void => {
        if (this.firstBuzzer === undefined || allowOverwrite) {
            this.firstBuzzer = data;
        }
    }
};

const Store = new GeopartyStore();
const GeopartyStoreContext = createContext(Store);

export {
    Store,
    GeopartyStoreContext as default
};