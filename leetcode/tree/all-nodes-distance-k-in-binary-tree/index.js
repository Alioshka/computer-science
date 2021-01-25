/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    const adjacencyList = {};

    function createGraph(node, parent) {
        if(!node) return;
        adjacencyList[node.val] = [];

        if(node.left) {
            adjacencyList[node.val].push(node.left.val);
            createGraph(node.left, node.val);
        }
        if(node.right) {
            adjacencyList[node.val].push(node.right.val);
            createGraph(node.right, node.val);
        }
        if(parent !== null) {
            adjacencyList[node.val].push(parent);
        }
    }

    createGraph(root, null);

    const queue = [[target.val, 0]];
    const visited = {};
    const result = [];

    while(queue.length) {
        const [node, distance] = queue.shift();

        if(visited[node]) continue;
        visited[node] = 1;

        if(distance === K) result.push(node);
        if(distance > K) return result;

        adjacencyList[node].forEach(_node => {
            queue.push([_node, distance + 1]);
        });
    }
    return result;
};
