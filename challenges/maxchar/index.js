'use strict';

function maxCharSolution1(str){
    let charMap = {};
    let max = 0;
    let maxChar = '';

    // make map with
    // key = char
    // value = char entrance
    // start
    for (let char of str) {
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    // end
    // code above(start->end) could be substituted with:
    // for (let char of str) {
    //     charMap[char] = charMap[char] + 1 || 1;
    // }

    for (let char in charMap) {
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = {
    maxCharSolution1
};