'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    describe(`Given ${fnName}('rail safety', 'fairy tales')`, () => {
        test(`return true`, () => {
            expect(fn('rail safety', 'fairy tales')).toEqual(true);
        });
    });

    describe(`Given ${fnName}('RAIL! SAFETY!', 'fairy tales')`, () => {
        test(`${fnName} return true`, () => {
            expect(fn('RAIL! SAFETY!', 'fairy tales')).toEqual(true);
        });
    });

    describe(`Given ${fnName}('Hi there', 'Bye there')`, () => {
        test(`${fnName} return false`, () => {
            expect(fn('Hi there', 'Bye there')).toEqual(false);
        });
    });
});