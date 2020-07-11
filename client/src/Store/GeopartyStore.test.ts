//import '@testing-library/jest-dom/extend-expect';
import { Store as GeopartyStore} from './GeopartyStore';
import { Participant } from './../Types/participant';

const sampleParticiapntOne: Participant = {
    name: 'Testy'
};

const sampleParticiapntTwo: Participant = {
    name: 'McTesterson'
};

test('Set Buzz In Enabled Flag', () => {
    expect(GeopartyStore.buzzInEnabled).toBe(true);

    GeopartyStore.setBuzzInEnabled(false);
    expect(GeopartyStore.buzzInEnabled).toBe(false);
});

test('Set First Buzzer Overwrite Allowed', () => {
    expect(GeopartyStore.firstBuzzer).toBe(undefined);

    GeopartyStore.setFirstBuzzer(sampleParticiapntOne, true);
    expect(GeopartyStore.firstBuzzer).toEqual(sampleParticiapntOne);
});

test('Set First Buzzer Overwrite Not Allowed', () => {
    GeopartyStore.setFirstBuzzer(sampleParticiapntOne, true);
    expect(GeopartyStore.firstBuzzer).toEqual(sampleParticiapntOne);

    GeopartyStore.setFirstBuzzer(sampleParticiapntTwo);
    expect(GeopartyStore.firstBuzzer).toEqual(sampleParticiapntOne);
});