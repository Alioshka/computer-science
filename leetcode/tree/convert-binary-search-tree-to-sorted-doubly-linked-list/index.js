/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root) return;
    let head, previous;
    function inOrderTraverse(node){
        if(node.left) inOrderTraverse(node.left);
        if(!head) head = node;
        if(previous){
            previous.right = node;
            node.left = previous;
        }
        previous = node; // move pointer
        if(node.right) inOrderTraverse(node.right);
    }
    inOrderTraverse(root);
    previous.right = head;
    head.left = previous;
    return head;
};
