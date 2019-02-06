'use strict';

const {
    fib1,
    fib2,
    fib3,
    fib4
} = require('./index');

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

describe('fib1() calculates correct fib value', () => {
    Object.keys(testData).forEach(key => {
        test(`for "${key}" correct fibonacci sequence is ${testData[key]}`, () => {
            expect(fib1(parseInt(key))).toEqual(testData[key]);
        });
    });
});

describe('fib2() calculates correct fib value', () => {
    Object.keys(testData).forEach(key => {
        test(`calculated fib value for "${key}" is ${testData[key]}`, () => {
            expect(fib2(parseInt(key))).toEqual(testData[key]);
        });
    });
});

describe('fib3() calculates correct fib value', () => {
    Object.keys(testData).forEach(key => {
        test(`calculated fib value for "${key}" is "${testData[key]}"`, () => {
            expect(fib3(parseInt(key))).toEqual(testData[key]);
        });
    });
});

describe('fib4() calculates correct fib value', () => {
    Object.keys(testData).forEach(key => {
        test(`calculated fib value for "${key}" is "${testData[key]}"`, () => {
            expect(fib4(parseInt(key))).toEqual(testData[key]);
        });
    });
});