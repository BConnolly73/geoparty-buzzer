import { observable, action, computed } from "mobx"
import { createContext } from 'react';
import Socket from './../Connection';

import { Participant } from './../Types/participant';

class GeopartyStore {
    @observable buzzInEnabled: boolean = true;
    @observable firstBuzzer: Participant | undefined = undefined;

    @observable earlyPressPenalty: boolean = false;
    @observable earlyPressMessage: string = '';
    @observable earlyPressCurrentDuration: number = 0;
    @observable earlyPressInterval: any = null;

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

    @action
    triggerEarlyPressPenalty = (seconds: number) => {
        console.log('Early press triggered');
        this.earlyPressPenalty = true;
        this.earlyPressMessage = `Pressed too early. ${seconds} second${seconds !== 1 ? 's' : ''} penalty`;

        if (this.earlyPressInterval === null) {
            console.log('Setting interval');
            this.earlyPressCurrentDuration = 0;
            this.earlyPressInterval = setInterval(() => {
                console.log('Interval tick!');
                this.earlyPressCurrentDuration += 50;

                if (seconds * 1000 <= this.earlyPressCurrentDuration) {
                    clearInterval(this.earlyPressInterval);
                    this.earlyPressCurrentDuration = 0;
                    this.earlyPressInterval = null;
                    return null;
                }
            }, 50);
        } else {
            console.log('Not setting interval');
        }

        setTimeout(() => {
            this.earlyPressPenalty = false;
            this.earlyPressMessage = '';
        }, seconds * 1000);
    }
};

const Store = new GeopartyStore();
const GeopartyStoreContext = createContext(Store);

export {
    Store,
    GeopartyStoreContext as default
};