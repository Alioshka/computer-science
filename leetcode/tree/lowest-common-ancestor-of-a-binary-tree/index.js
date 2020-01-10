/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let _p = null;
    let _q = null;

    let node = root;
    node.parent = null;
    node.level = 0;
    let queue = [node];

    while(queue.length) {
        node = queue.shift();
        if(node.val === p.val){
            _p = node;
        }
        if(node.val === q.val){
            _q = node;
        }

        if(_p !== null && _q !==null){
            // if we already find both node,
            // we should stop traversing
            break;
        }

        if(node.left){
            node.left.parent = node;
            node.left.level = node.level + 1;
            queue.push(node.left);
        }
        if(node.right){
            node.right.parent = node;
            node.right.level = node.level + 1;
            queue.push(node.right);
        }
    }

    // levels:
    //  root -> level === 0
    //  / \
    // n   n -> level === level+1 === 1 and n.parent === root
    // ......

    // Now, for both _p and _q nodes we do back track(move up), using parent,
    // we do back track until it's the same node. That is the lovest common ancestor
    while(_p.val !== _q.val){
        if(_p.level > _q.level){ // we need to move up left node
            _p = _p.parent;
        } else if(_q.level > _p.level){ // we need to move up right node
            _q = _q.parent;
        } else if(_p.level === _q.level){ // we need to move up both node
            _p = _p.parent;
            _q = _q.parent;
        }
    }

    return _p;
};
