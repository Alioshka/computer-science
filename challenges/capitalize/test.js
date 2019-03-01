'use strict';

const src = require('./index');

const testData = {
    'hi there, how is it going?': 'Hi There, How Is It Going?',
    'i love breakfast at bill miller bbq': 'I Love Breakfast At Bill Miller Bbq'
};

Object.entries(src).forEach(([fnName, fn]) => {
    Object.keys(testData).forEach(key => {
        test(`${fnName}("${key}") should return "${testData[key]}"`, () => {
            expect(fn(key)).toEqual(testData[key]);
        });
    });
});