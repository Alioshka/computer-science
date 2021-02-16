// https://leetcode.com/problems/delete-nodes-and-return-forest/discuss/1059898/JavaScript-Recursion-Depth-First-Search-Post-Order-Traversing-(with-comments)
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let result = [];
    // 1. building hash map for to_delete
    let map = {};
    to_delete.forEach(_node => {
        map[_node] = 1;
    })

    // 2. look at the Depth First Search Post Order Traversing
    // it start from the bottom of the tree and goes from children(left to right) to the parent
    // if parent is a node we need to delete, we have its children and can save them to result []
    //      10
    //   5     13
    //  2 7   11 16
    // ------------------------
    // [2, 7, 5, 11, 16, 13, 10] Depth First Search Post Order Traversing
    function dfs(node){
        if (node == null) return node;
        node.left = dfs(node.left);
        node.right = dfs(node.right);

        if (map[node.val]) {
            if (node.left) result.push(node.left);
            if (node.right) result.push(node.right);
            return null;
        }
        return node;
    };

    if (!map[root.val]) result.push(root);
    dfs(root);
    return result;
};
