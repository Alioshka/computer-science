// https://leetcode.com/problems/invert-binary-tree/submissions/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root){
        let temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
    }

    return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree2 = function(root) {
    // same as invertTree but with sintaksis sugar
    if(root){
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }

    return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeMy = function(root) {

    if(!root) return root; // added to satisfy leetcode test to satisfy leetcode tests

    let queue = [root];
    let currentNode;
    let temp;

    while(queue.length){
        currentNode = queue.shift();
        if(!currentNode) continue;
        //if(currentNode.left){ // commented this out to satisfy leetcode test
        queue.push(currentNode.left);
        temp = currentNode.left;
        currentNode.left = currentNode.right;
        //}
        //if(currentNode.right){ // commented this out to satisfy leetcode test
        queue.push(currentNode.right);
        currentNode.right = temp;
        //}
    }

    return root;

};
