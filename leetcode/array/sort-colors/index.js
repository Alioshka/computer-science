// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0;
    let p2 = nums.length - 1;
    let curr = 0;

    let tmp;
    while (curr <= p2) {
        if (nums[curr] == 0) {
            swap(nums, p0, curr);
            p0++;
            curr++;
        }
        else if (nums[curr] == 2) {
            swap(nums, p2, curr);
            p2--;
        }
        else curr++;
    }
};

function swap(arr, i, j){
    let _ = arr[i];
    arr[i] = arr[j];
    arr[j] = _;
}
