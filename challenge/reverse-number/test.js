'use strict';

const {
    reverseNumber1,
    reverseNumber2,
    reverseNumber3
} = require('./index');

const input = 12345;
const reversed = 54321;
const negativeInput = -12345;
const negativeReversed = -54321;

test('reverseNumber1() reverses a number', () => {
    expect(reverseNumber1(input)).toEqual(reversed);
});

test('reverseNumber2() reverses a number', () => {
    expect(reverseNumber2(input)).toEqual(reversed);
});

test('reverseNumber3() reverses a number', () => {
    expect(reverseNumber3(input)).toEqual(reversed);
});

test('reverseNumber3() reverses a negative number', () => {
    expect(reverseNumber3(negativeInput)).toEqual(negativeReversed);
});