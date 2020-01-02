// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/468168/javascript-olog-n-binary-search-solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = null

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(min === null || nums[mid] < min){
            min = nums[mid];
        }

        // When dividing the roated array into two halves, one must be sorted.
        if (nums[left] <= nums[mid]) { // Check if the left side is sorted
            min = Math.min(nums[left], min);
            left = mid + 1; // lets check right side in the next iteration of while loop
        } else {// Otherwise, the right side is sorted
            min = Math.min(nums[mid + 1], min);
            right = mid - 1; // lets check left side in the next iteration of while loop
        }
    }

    return min;
};
