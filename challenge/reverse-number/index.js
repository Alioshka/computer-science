'use strict';

function reverseNumber1(n) {
    const reversed = n.toString().split('').reverse().join('');
    if(n < 0){
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

function reverseNumber2(n) {
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}

function reverseNumber3(n) {
    let revertedNumber = 0;
    let tempNumber = n * Math.sign(n); // Math.sign is needed if n is negative

    while(tempNumber > 0) {
        revertedNumber = revertedNumber * 10 + tempNumber % 10;
        tempNumber = Math.floor(tempNumber /10);
    }

    return revertedNumber * Math.sign(n);
}

module.exports = {
    reverseNumber1,
    reverseNumber2,
    reverseNumber3
};