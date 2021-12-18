import {MapExt} from "../src";


describe('map-ext', () => {
    let called = 0;
    const wk = new MapExt<object, { test: number }>(() => ({test: called++}));

    test('get test', async () => {
        const foo = {};
        const bar = {}

        expect(wk.has(foo)).toBeFalsy();
        expect(wk.has(bar)).toBeFalsy();

        wk.get(foo);
        expect(wk.has(foo)).toBeTruthy();
        expect(wk.get(foo).test).toBe(0);

        wk.get(bar);
        expect(wk.has(bar)).toBeTruthy();
        expect(wk.get(bar).test).toBe(1);
    });
});
