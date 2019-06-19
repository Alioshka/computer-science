'use strict';

const src = require('./index');

const testInput = [1, 6, 5, 7, 0, 3, 25];
const testOutput = [0, 1, 3, 5, 6, 7, 25];

Object.entries(src).forEach(([fnName, fn]) => {
    describe(`${fnName} perform correct sorting`, () => {
        test(`${fnName} return sorted array`, () => {
            expect(fn(testInput)).toEqual(testOutput);
        });
    });
});
