'use strict';

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

function vowels2(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

function vowels3(str) {
    let count = 0;
    const checker = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < str.length; i++) {
        if (checker.has(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

function vowels4(str) {
    let count = 0;
    const vowels = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    };

    for (let i = 0; i < str.length; i++) {
        if (vowels[str[i].toLowerCase()]) {
            count++;
        }
    }

    return count;
}

module.exports = {
    vowels1,
    vowels2,
    vowels3,
    vowels4
};