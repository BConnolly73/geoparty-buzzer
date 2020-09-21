"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import '@testing-library/jest-dom/extend-expect';
const GeopartyStore_1 = require("./GeopartyStore");
const sampleParticiapntOne = {
    name: 'Testy'
};
const sampleParticiapntTwo = {
    name: 'McTesterson'
};
test('Set Buzz In Enabled Flag', () => {
    expect(GeopartyStore_1.Store.buzzInEnabled).toBe(true);
    GeopartyStore_1.Store.setBuzzInEnabled(false);
    expect(GeopartyStore_1.Store.buzzInEnabled).toBe(false);
});
test('Set First Buzzer Overwrite Allowed', () => {
    expect(GeopartyStore_1.Store.firstBuzzer).toBe(undefined);
    GeopartyStore_1.Store.setFirstBuzzer(sampleParticiapntOne, true);
    expect(GeopartyStore_1.Store.firstBuzzer).toEqual(sampleParticiapntOne);
});
test('Set First Buzzer Overwrite Not Allowed', () => {
    GeopartyStore_1.Store.setFirstBuzzer(sampleParticiapntOne, true);
    expect(GeopartyStore_1.Store.firstBuzzer).toEqual(sampleParticiapntOne);
    GeopartyStore_1.Store.setFirstBuzzer(sampleParticiapntTwo);
    expect(GeopartyStore_1.Store.firstBuzzer).toEqual(sampleParticiapntOne);
});
//# sourceMappingURL=GeopartyStore.test.js.map