// https://leetcode.com/problems/binary-tree-paths/discuss/1045619/JavaScript-dfs-recursion-and-iterative-solutions

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
 * @return {string[]}
 */
var binaryTreePaths2 = function(root) {
    // recursion
    let result = [];
    if(!root) return result;
    function dfs(root, str){
        if(!root.left && !root.right) result.push(str + root.val);
        if(root.left) dfs(root.left, str + root.val + '->');
        if(root.right) dfs(root.right, str + root.val + '->');
    }
    dfs(root, "");
    return result;
};

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // iterative
    let result = [];
    if(!root) return result;
    let stack = [{
        node: root,
        path: ''
    }];


    while(stack.length){
        const { node, path } = stack.pop();

        if(!node.left && !node.right){
            result.push(path + node.val)
        }

        if(node.left) {
            stack.push({
                node: node.left,
                path: path + node.val + '->'
            });
        }

        if(node.right) {
            stack.push({
                node: node.right,
                path: path + node.val + '->'
            });
        }
    }

    return result;
};
