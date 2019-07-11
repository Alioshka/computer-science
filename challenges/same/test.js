'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    const input1 = [1,2,3,2,5];
    const input1Mult = [9,1,4,4,25];
    const input1MultBad = [9,1,4,4,11];
    describe(`Given ${fnName})`, () => {
        test(`return true`, () => {
            expect(fn(input1, input1Mult)).toEqual(true);
        });

        test(`return true`, () => {
            expect(fn(input1, input1MultBad)).toEqual(false);
        });
    });
});
