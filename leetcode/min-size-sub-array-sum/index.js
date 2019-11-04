// Given an array of n positive integers and a positive integer s,
//     find the minimal length of a contiguous subarray of which the sum ≥ s.
//     If there isn't one, return 0 instead.
//
// Example:
//
//     Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.
//     Follow up:
//     If you have figured out the O(n) solution,
// try coding another solution of which the time complexity is O(n log n).

// solution 1

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let minLen = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for(let i = 0, len = 0; i < nums.length; i++) {
        sum += nums[i];
        len++;
        while(sum >= s){
            if(len < minLen) minLen = len;
            sum -= nums[i - len + 1];
            len--;
        }
    }
    return minLen < Number.MAX_SAFE_INTEGER ? minLen : 0;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function(s, nums) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if(total < s && end < nums.length){
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window
        else if(total >= s){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};
