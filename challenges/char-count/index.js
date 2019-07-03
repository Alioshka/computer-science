'use strict';

function charCount(str){
    let result = {};

    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
}

module.exports = {
    charCount
};

// not to count " " example
// if(/[a-z0-9]/.test(char)) {
//     // code logic
// }
