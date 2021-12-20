import {WeakMapExt} from "../src";


describe('weak-map-ext', () => {
    let called = 0;
    const wk = new WeakMapExt<object, { test: number, k: object|any }>((k) => ({test: called++, k}));

    test('get test', async () => {
        const foo = {
            a: 5
        };
        const bar = {
            b: 6
        }

        expect(wk.has(foo)).toBeFalsy();
        expect(wk.has(bar)).toBeFalsy();

        wk.get(foo);
        expect(wk.has(foo)).toBeTruthy();
        expect(wk.get(foo).test).toBe(0);
        expect(wk.get(foo).k.a).toBe(5);

        wk.get(bar);
        expect(wk.has(bar)).toBeTruthy();
        expect(wk.get(bar).test).toBe(1);
        expect(wk.get(bar).k.b).toBe(6);
    });
});
