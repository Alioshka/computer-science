// https://leetcode.com/problems/find-duplicate-subtrees/discuss/1067576/JavaScript-Post-Order-Traversing-with-HashMap-solution-with-comments

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let result = [];
    let map = {};

    //      1
    //   2     3
    // 4     2   4
    //     4
    // ------------------------
    // [4, 2, 4, 2, 4, 3, 1] Depth First Search Post Order Traversing
    //
    // subTreeString:
    // 4.#.#
    // 2.4.#.#.#
    // 4.#.#
    // 2.4.#.#.#
    // 4.#.#
    // 3.2.4.#.#.#.4.#.#
    // 1.2.4.#.#.#.3.2.4.#.#.#.4.#.#

    function dfs(node){
        if (!node) return '#';

        const subTreeString = `${node.val}.${dfs(node.left)}.${dfs(node.right)}`;
        map[subTreeString] = (map[subTreeString] || 0) + 1;

        if (map[subTreeString] === 2) {
            result.push(node);
        }

        return subTreeString;
    };

    dfs(root);
    return result;
};
