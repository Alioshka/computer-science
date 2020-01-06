// https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/472463/javascript-solutions

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Solution 1
    let visited = [];
    function traverse(node){
        if(node === null) return;
        if(node.left) traverse(node.left);
        visited.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return visited;

    // Solution 2: with spread operator
    // if(root === null) return [];
    // return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
