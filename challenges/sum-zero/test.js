'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    const input1 = [-3, -2, -1, 0, 1, 2, 3];
    const input2 = [-2, 0, 1, 3];
    const input3 = [1,2,3];
    const output = [-3, 3];
    describe(`Given ${fnName})`, () => {
        test(`return pair`, () => {
            expect(fn(input1)).toEqual(output);
        });

        test(`return undefined`, () => {
            expect(fn(input2)).toEqual(undefined);
        });

        test(`return undefined`, () => {
            expect(fn(input3)).toEqual(undefined);
        });
    });
});
