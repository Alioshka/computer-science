'use strict';

function reverse1(str) {
    return str.split('').reverse().join('');
}

function reverse2_1(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // reversed = reversed + str[i];
    }
    return reversed;
}

function reverse2_2(str) {
    let reversed = '';
    for(let character of str){
        reversed = character + reversed
    }
    return reversed;
}

function reverse2_3_1(str) {
    return str.split('').reduce((reversed, sharacter) => {
        return sharacter + reversed;
    }, '');
}

function reverse2_3_2(str) {
    return str.split('').reduce((reversed, sharacter) => sharacter + reversed, '');
}

function reverse3_1(str) {
    if(!str){
        return '';
    }
    if(str.length <= 1){
        return str;
    }
    return str.charAt(str.length - 1) + reverse3_1(str.substr(1, str.length - 2)) + str.charAt(0);
}

function reverse3_2(str) {
    if(!str){
        return '';
    }
    if(str.length <= 1){
        return str;
    }
    return str[str.length - 1] + reverse3_2(str.substr(1, str.length - 2)) + str[0];
}

module.exports = {
    reverse1,
    reverse2_1,
    reverse2_2,
    reverse2_3_1,
    reverse2_3_2,
    reverse3_1,
    reverse3_2
};