// https://leetcode.com/problems/serialize-and-deserialize-bst/discuss/1068836/JavaScript-Pre-Order-Traversing

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];

    function traverse(node) {
        if(!node) {
            result.push('X');
            return;
        }
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return result.join('.');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const queue = data.split('.');
    let index = 0;
    function traverse() {
        const currNode = queue[index];
        index++;
        if(currNode === 'X') return null;

        const tree = new TreeNode(currNode);
        tree.left = traverse();
        tree.right = traverse();
        return tree;
    }
    return traverse();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
