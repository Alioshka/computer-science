'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    const input = [9, 2, 2, 3, 5, 4, 6, 2];
    const output = [15];
    describe(`Given ${fnName})`, () => {
        test(`return max sub array sum for 2`, () => {
            expect(fn(input, 2)).toEqual(11);
        });

        test(`return max sub array sum for 3`, () => {
            expect(fn(input, 3)).toEqual(15);
        });

        test(`return max sub array sum for 4`, () => {
            expect(fn(input, 4)).toEqual(18);
        });
    });
});
