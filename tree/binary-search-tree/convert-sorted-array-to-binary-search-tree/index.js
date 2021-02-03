// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/1039485/javascript-solution-with-comments

//      10
//   5     13
// 2  7  11  16
// tree depthFirstSearchInOrder:
// [2, 5, 7, 10, 11, 13, 16] - sorted array
// [2, 5, 7] root 10 [11, 13, 16]
//  2, root 5, 7      11 , root 13, 16
var sortedArrayToBST = function(nums) {
    if (!nums) return null;

    return helper(nums, 0, nums.length - 1);
};

function helper(nums, low, high) {
    if (low > high) return null;

    const mid = Math.floor((high + low) / 2)
    const root = new TreeNode(nums[mid])

    root.left = helper(nums, low, mid - 1)
    root.right = helper(nums, mid + 1, high)

    return root
}
