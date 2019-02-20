'use strict';

// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps1(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

function steps2(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps2(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps2(n, row, stair);
}

function steps3(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps3(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps3(n, row, stair + add);
}

// steps2 and steps3 exact the same,
// diff only in ternary operator
module.exports = {
    steps1,
    steps2,
    steps3
};