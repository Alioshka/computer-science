'use strict';

// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern

// Examples:
// areThereDuplicates(1,2,3) // false
// areThereDuplicates(2,3,1,3) // true
// areThereDuplicates('a','b','c','a') // true

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// Frequency Counter
function areThereDuplicates(){
    let collection = {};
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false;
}

// Native
function areThereDuplicates2() {
    return new Set(arguments).size !== arguments.length;
}

module.exports = {
    areThereDuplicates,
    areThereDuplicates2
};
