'use strict';

const {
    vowels1,
    vowels2,
    vowels3,
    vowels4
} = require('./index');

const testData = {
    "Hi There!": 3,
    "Why do you ask?": 4,
    "Why?": 0
};

describe('vowels1() count all vowels', () => {
    Object.keys(testData).forEach(key => {
        test(`"${key}" has ${testData[key]} vowels`, () => {
            expect(vowels1(key)).toEqual(testData[key]);
        });
    });
});

describe('vowels2() count all vowels', () => {
    Object.keys(testData).forEach(key => {
        test(`"${key}" has ${testData[key]} vowels`, () => {
            expect(vowels2(key)).toEqual(testData[key]);
        });
    });
});

describe('vowels3() count all vowels', () => {
    Object.keys(testData).forEach(key => {
        test(`"${key}" has ${testData[key]} vowels`, () => {
            expect(vowels3(key)).toEqual(testData[key]);
        });
    });
});

describe('vowels4() count all vowels', () => {
    Object.keys(testData).forEach(key => {
        test(`"${key}" has ${testData[key]} vowels`, () => {
            expect(vowels4(key)).toEqual(testData[key]);
        });
    });
});