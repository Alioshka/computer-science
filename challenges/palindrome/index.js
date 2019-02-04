'use strict';

function palindrome(str) {
    if(typeof str !== 'string'){
        str = str.toString();
    }
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function palindrome2(str) {
    if(typeof str !== 'string'){
        str = str.toString();
    }
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/*
    Challenge:
    check that number is palindrome without converting it to string

    Algorithm

    First of all we should take care of some edge cases.
    All negative numbers are not palindrome, for example: -123 is not a palindrome since the '-' does not equal to '3'.
    So we can return false for all negative numbers.

    Now let's think about how to revert the last half of the number.
    For number 1221, if we do 1221 % 10, we get the last digit 1,
    to get the second to the last digit, we need to remove the last digit from 1221,
    we could do so by dividing it by 10, 1221 / 10 = 122.
    Then we can get the last digit again by doing a modulus by 10, 122 % 10 = 2,
    and if we multiply the last digit by 10 and add the second last digit, 1 * 10 + 2 = 12,
    it gives us the reverted number we want.
    Continuing this process would give us the reverted number with more digits.

    Complexity analysis: https://leetcode.com/problems/palindrome-number/solution/
    for improved solution (when we go through the half, not all digits) - in current example we go through all digits
*/

function palindrome3(input) {
    if(typeof input === 'number'){
        // Special cases:
        // As discussed above, when input < 0, input is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome,
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.
        if(input < 0 || (input % 10 === 0 && input !== 0)) {
            return false;
        }

        let revertedNumber = 0;
        let tempNumber = input;
        while(tempNumber > 0) {
            revertedNumber = revertedNumber * 10 + tempNumber % 10;
            tempNumber = Math.floor(tempNumber /10);
        }

        return input === revertedNumber;
    }
    if(typeof input === 'string'){
        const reversed = input.split('').reverse().join('');
        return input === reversed;
    }

    return false;
}

module.exports = {
    palindrome,
    palindrome2,
    palindrome3
};