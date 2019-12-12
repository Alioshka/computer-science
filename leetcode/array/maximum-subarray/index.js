// Approach 2: Greedy
// https://leetcode.com/problems/maximum-subarray/discuss/449875/javascript-Approach-2%3A-Greedy

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++){
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};
