// https://leetcode.com/problems/binary-tree-right-side-view/discuss/1023769/javascript-with-comments

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let levelRightSide = []; // here we will save only last (right) element from same level

    if(root === null){
        return levelRightSide;
    }

    const LEVEL_END = '*';
    let queue = [root, LEVEL_END];
    let level = []; // here we will store current level

    levelRightSide = [root.val];

    while(queue.length > 1) {
        let node = queue.shift();
        if(node === LEVEL_END){
            levelRightSide.push(level[level.length-1]); // we push only last(right) element from the level
            level = []; // and start to explore new level
            queue.push(LEVEL_END);
        } else {
            if(node.left){
                queue.push(node.left);
                level.push(node.left.val);
            }
            if(node.right){
                queue.push(node.right);
                level.push(node.right.val);
            }
        }
    }

    return levelRightSide

};
