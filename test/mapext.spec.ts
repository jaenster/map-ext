import {MapExt} from "../src";


describe('map-ext', () => {
    let called = 0;
    const mp = new MapExt<object, { test: number, k: object|any }>((k) => ({test: called++, k}));

    test('get test', async () => {
        const foo = {
            a: 5
        };
        const bar = {
            b: 6
        }

        expect(mp.has(foo)).toBeFalsy();
        expect(mp.has(bar)).toBeFalsy();

        mp.get(foo);
        expect(mp.has(foo)).toBeTruthy();
        expect(mp.get(foo).test).toBe(0);
        expect(mp.get(foo).k.a).toBe(5);

        mp.get(bar);
        expect(mp.has(bar)).toBeTruthy();
        expect(mp.get(bar).test).toBe(1);
        expect(mp.get(bar).k.b).toBe(6);
    });
});
