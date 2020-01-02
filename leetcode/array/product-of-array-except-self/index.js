// https://leetcode.com/problems/product-of-array-except-self/discuss/468243/javascript-Approach-1%3A-Left-and-Right-product-lists

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // brute force solution

    // for some reason in AC we have "Given an array nums of n integers where n > 1"
    // but in tests we have such inputs like:
    // [1,0], [0,0]
    // let total = 1;
    // nums.forEach(num => total *= num);
    // return nums.map(num => total/num);


    // Approach 1: Left and Right product lists
    let left = new Array(nums.length);
    let right = new Array(nums.length);

    // Note: for the element at index '0', there are no elements to the left,
    // so left[0] would be 1
    left[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    // Note: for the element at index 'length - 1', there are no elements to the right,
    // so the rigth[length - 1] would be 1
    right[nums.length - 1] = 1
    for(let i = nums.length - 2; i>=0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    return left.map((_, index) => _ * right[index]);
};
