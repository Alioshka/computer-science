// https://leetcode.com/problems/kth-smallest-element-in-a-bst

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // to have smallest -> higest traversing we have to perform
    // depth first search in order traversing
    // because tree is 100% binary search tree
    // after traversing we will have [smallest ... higest] sorted array
    // and kts smallest element will be visited[k-1];
    let visited = [];
    function travers(node){
        if(node.left) travers(node.left);
        visited.push(node.val);
        if(node.right) travers(node.right);
    }

    travers(root);
    return visited[k-1];
};

var kthSmallestImproved = function(root, k) {
    // since we know the element index,
    // we can stop traversing, as we do not need the rest of elements
    // and return [k-1] element immediatelly
    let index = -1;
    let element = null;
    function travers(node){
        if(element) return;

        if(node.left) travers(node.left);
        index += 1;
        if(index === k-1){
            element = node.val;
            return;
        }
        if(node.right) travers(node.right);
    }

    travers(root);
    return element;
};
