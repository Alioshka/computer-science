'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    describe(`Given ${fnName}`, () => {
        test(`check same frequency`, () => {
            expect(fn(182,281)).toEqual(true);
        });

        test(`check same frequency`, () => {
            expect(fn(34,14)).toEqual(false);
        });

        test(`check same frequency`, () => {
            expect(fn(34,431)).toEqual(false);
        });

        test(`check same frequency`, () => {
            expect(fn(182,281)).toEqual(true);
        });
    });
});
