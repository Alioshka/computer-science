'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    const arr = [2,5,6,9,13,15,28,30];
    test(`${fnName} return -1 if element not exist in array`, () => {
        const elem = 103;

        expect(fn(arr, elem)).toEqual(-1);
    });

    test(`${fnName} return index of element in array`, () => {
        const elem = 13;

        expect(fn(arr, elem)).toEqual(4);
    });
});