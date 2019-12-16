// https://leetcode.com/problems/plus-one/discuss/453262/javascript-solution

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    len = digits.length-1;
    let add = 1;

    for(let i = len; i >= 0; i--){
        digits[i] = digits[i] + add;
        if(digits[i] === 10){
            add = 1;
            digits[i] = 0;
        } else {
            add = 0;
            break;
        }
    }

    // now we need to handle first element of array,
    // if it was 10 after digits[0] = digits[0] + 1;
    if(add === 1){
        digits.unshift(1);
    }

    return digits;
};
