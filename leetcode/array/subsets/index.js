/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return backtrack([], 0, nums, [[]])
};

function backtrack(curr, first, nums, result) {
    // we iterate over the indexes i from 'first' to the length of the entire sequence 'nums'
    for (let i = first; i < nums.length; i++) {
        curr.push(nums[i]);

        // use distructure operator to clone 'curr' value and save to 'result'
        result.push([...curr]);

        // generate all other subsets for the current subset.
        // increasing the position by one to avoid duplicates in 'result'
        backtrack(curr, i + 1, nums, result);

        // BACKTRACK.
        curr.pop();
    }

    // Return all subsets of a set.
    return result;
}

subsets([1,2,3]);
