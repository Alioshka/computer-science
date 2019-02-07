'use strict';

const src = require('./index');

Object.entries(src).forEach(entry => {
    let fnName, fn;
    [fnName, fn] = entry;

    test(`function ${fnName} exists`, () => {
        expect(typeof fn).toEqual('function');
    });

    test(`${fnName} divides an array of 10 elements with chunk size 2`, () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const chunked = fn(arr, 2);

        expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    });


    test(`${fnName} divides an array of 3 elements with chunk size 1`, () => {
        const arr = [1, 2, 3];
        const chunked = fn(arr, 1);

        expect(chunked).toEqual([[1], [2], [3]]);
    });

    test(`${fnName} divides an array of 5 elements with chunk size 3`, () => {
        const arr = [1, 2, 3, 4, 5];
        const chunked = fn(arr, 3);

        expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
    });

    test(`${fnName} divides an array of 13 elements with chunk size 5`, () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const chunked = fn(arr, 5);

        expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
    });
});