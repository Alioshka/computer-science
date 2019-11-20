'use strict';

// Fibonnaci's sequence:
// input    0 1 2 3 4 5 6  7  8  9 ...
// output   0 1 1 2 3 5 8 13 21 34 ...

// --- Directions
// calculate the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

///////////////////////////////////////////
// WITH LOOP

function fib1(n){
    let fibSequence = [0, 1];

    for(let i = 2; i <= n; i++){
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence[n];
}

function fib2(n) {
    if(n <= 1){
        return n;
    }

    let a = 0;
    let b = 1;
    let sum = a + b;

    for (let i = 2; i <= n; i++ ){
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
}
////////////////////////////////////////////
// WITH RECURSION

// BAD SOLUTION !!!
function fib3(n) {
    if( n <= 1) {
        return n;
    } else {
        return fib3(n - 1) + fib3(n - 2);
    }
}

// IMPROVED SOLUTION with memoization(caching)

function memoize(fn){
    let cache = {};
    return function (n) {
        if (cache[n]) {
            return cache[n];
        }

        const result = fn(n);
        cache[n] = result;

        return result;
    }
}

const fib3Memoize = memoize(fib3);



module.exports = {
    fib1,
    fib2,
    fib3,
    fib3Memoize
};
