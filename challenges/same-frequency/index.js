'use strict';

// write a function called sameFrequency.
// Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution must have the following complexities:
// Time: O(N)

// Sample input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(34,43) // true
// sameFrequency(182,821) // true

// Time Complexity - O(N)
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for(let i = 0; i < strNum2.length; i++){
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

module.exports = {
    sameFrequency
};
