'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    describe(`Given ${fnName}`, () => {
        test(`check dublicates`, () => {
            expect(fn(1,2,3)).toEqual(false);
        });

        test(`check dublicates`, () => {
            expect(fn(2,3,1,3)).toEqual(true);
        });

        test(`check dublicates`, () => {
            expect(fn('a','b','c','a')).toEqual(true);
        });
    });
});
