'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    const long = "This is a string, isn't it ?";
    test(`${fnName} should count substring occurrence correctly`, () => {
        const short = 'is';
        expect(fn(long, short)).toEqual(3);
    });

    test(`${fnName} should count substring occurrence correctly`, () => {
        const short = 'This';
        expect(fn(long, short)).toEqual(1);
    });

    test(`${fnName} should count substring occurrence correctly`, () => {
        const short = 'That';
        expect(fn(long, short)).toEqual(0);
    });
});
