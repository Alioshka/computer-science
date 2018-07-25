// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        let secondNum = target - nums[i];
        if (nums.indexOf(secondNum) !== -1 && nums.lastIndexOf(secondNum) !== i) {
            return [i, nums.lastIndexOf(secondNum)];
        }
    }
}

let arr = [1, 3, 7, 8];
console.log(twoSum(arr, 10));