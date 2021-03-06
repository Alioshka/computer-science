'use strict';

// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]

function twoSum(nums, target) {
    let storage = {};
    let indexesArray = [];
    for(let i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i];
        if (storage[secondNum] || storage[secondNum] === 0) {
            indexesArray = [storage[secondNum], i];
        } else {
            storage[nums[i]] = i;
        }
    }
    return indexesArray;
}

module.exports = {
    twoSum
};
