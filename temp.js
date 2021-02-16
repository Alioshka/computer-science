

var findDuplicateSubtrees = function(root) {
    let result = [];
    let map = {};

    //      10
    //   5     13
    //  2 7   11 16
    // ------------------------
    // [2, 7, 5, 11, 16, 13, 10] Depth First Search Post Order Traversing
    function dfs(node){
        if (!node) return '#';
        const subtree = `${node.val}.${dfs(node.left)}.${dfs(node.right)}`;
        map[subtree] = (map[subtree] || 0) + 1;
        if (map[subtree] === 2) {
            result.push(node);
        }
        return subtree;

    };

    dfs(root);
    return result;
};
