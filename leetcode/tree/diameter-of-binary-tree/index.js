// https://leetcode.com/problems/diameter-of-binary-tree/discuss/1012633/javascriptdfs-on-solution

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let longestPath = 0;

    depth(root);

    return longestPath;

    function depth(node) {
        if (!node) return 0;

        const left = depth(node.left);
        const right = depth(node.right);

        longestPath = Math.max(longestPath, left + right);

        // depth
        return Math.max(left, right) + 1;
    }
};
