'use strict';

const {
    maxCharSolution1
} = require('./index');

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const input1 = 'abcccccccd';
const output1 = 'c';
const input2 = 'apple 1231111';
const output2 = '1';

test(`maxChar("abcccccccd") === "c"`, () => {
    expect(maxCharSolution1(input1)).toEqual(output1);
});

test(`maxChar("apple 1231111") === "1"`, () => {
    expect(maxCharSolution1(input2)).toEqual(output2);
});