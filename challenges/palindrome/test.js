'use strict';

const {
    palindrome,
    palindrome2,
    palindrome3
} = require('./index');

const palindromeInput = 12321;
const palindromeInput2 = '12321';
const notPalindromeInput = 12322;
const notPalindromeInput2 = '12322';

test(`${palindromeInput} is palindrome`, () => {
    expect(palindrome(palindromeInput)).toEqual(true);
});

test(`${notPalindromeInput} is not palindrome`, () => {
    expect(palindrome2(notPalindromeInput)).toEqual(false);
});

test(`${palindromeInput2} is palindrome`, () => {
    expect(palindrome(palindromeInput2)).toEqual(true);
});

test(`${notPalindromeInput2} is not palindrome`, () => {
    expect(palindrome2(notPalindromeInput2)).toEqual(false);
});

test(`${palindromeInput} is palindrome`, () => {
    expect(palindrome3(palindromeInput)).toEqual(true);
});

test(`${notPalindromeInput} is not palindrome`, () => {
    expect(palindrome3(notPalindromeInput)).toEqual(false);
});