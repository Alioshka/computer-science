// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/273622/Javascript-Simple-O(log-N)-Binary-Search-Solution

// Let's take some examples and see how we can simplify the condition.
//
// Original sorted array
//     [1, 2, 3, 4, 5, 6, 7]
//
// After rotation, it might be something like
//     [3, 4, 5, 6, 7, 1, 2]
//     [6, 7, 1, 2, 3, 4, 5]
//     [1, 2, 3, 4, 5, 6, 7] <-- rotated and end up the same
// and etc..
//
//     When you divide the rotated array into two halves, using mid index, at least one of them should remain sorted ALWAYS.
//
//     [3, 4, 5, 6, 7, 1, 2]
// -> [3, 4, 5] [ 6, 7, 1, 2]
// the left side remains sorted
//
//     [6, 7, 1, 2, 3, 4, 5]
// -> [6, 7, 1] [2, 3, 4, 5]
// the right side remains sorted
//
//     [1, 2, 3, 4, 5, 6, 7]
// -> [1, 2, 3] [4, 5, 6, 7]
// Both sides remain sorted.
//
//     If you know one side is sorted, the rest of logic becomes very simple.
//     If one side is sorted, check if the target is in the boundary, otherwise it's on the other side.

// IF smallest <= target <= biggest
//  then target is here
// ELSE
//  then target is on the other side

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // When dividing the roated array into two halves, one must be sorted.
        if (nums[left] <= nums[mid]) { // Check if the left side is sorted
            if (nums[left] <= target && target <= nums[mid]) {
                // target is in the left
                right = mid - 1;
            } else {
                // target is in the right
                left = mid + 1;
            }
        } else {// Otherwise, the right side is sorted
            if (nums[mid] <= target && target <= nums[right]) {
                // target is in the right
                left = mid + 1;
            } else {
                // target is in the left
                right = mid - 1;
            }
        }
    }

    return -1;
};
