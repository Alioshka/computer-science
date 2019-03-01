'use strict';

const src = require('./index');

const testData = {
    0:0,
    1:1,
    2:1,
    3:2,
    4:3,
    5:5,
    6:8,
    7:13,
    8:21,
    9:34,
    39:63245986
};

Object.entries(src).forEach(([fnName, fn]) => {
    describe(`${fnName} calculates correct fib value`, () => {
        Object.keys(testData).forEach(key => {
            test(`for "${key}" correct fibonacci sequence is ${testData[key]}`, () => {
                expect(fn(parseInt(key))).toEqual(testData[key]);
            });
        });
    });
});
