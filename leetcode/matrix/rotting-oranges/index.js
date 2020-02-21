// https://leetcode.com/problems/rotting-oranges/discuss/508212/JavaScript-breadth-first-search-adjacency-matrix-simple-iterative-solution
// 994. Rotting Oranges
// In a given grid, each cell can have one of three values:
//
//     the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
//     Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
//
//     Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.
//
//
//
// Example 1:
// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
//
// Input: [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
//
// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

// Note:
//
// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// grid[i][j] is only 0, 1, or 2.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let depth = 0; // our minutes
    let depthQueue = [];
    let queue = []; // to add rotten oranges
    let freshOranges = 0;

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] === 1){
                freshOranges++;
            }
            if(grid[row][col] === 2){
                queue.push([row, col]);
            }
        }
    }

    while (queue.length && freshOranges) {
        depthQueue = []; // we start new depth

        while(queue.length){
            let [_row, _col] = queue.shift(); // rotten orange
            rotNeighbors(_row, _col);
        }

        // we are done with current level/depth
        // lets up it and start traversing all neighbors we collected
        depth++;
        queue = depthQueue;
    }

    if(freshOranges !== 0){
        return -1
    }
    return depth;

    // rot surrounding oranges
    // Add them to the depthQueue
    function rotNeighbors(row, col){
        // check up
        if(grid[row][col+1] === 1){
            freshOranges--;
            grid[row][col+1] = 2;
            depthQueue.push([row, col+1]);
        }

        // check down
        if(grid[row][col-1] === 1){
            freshOranges--;
            grid[row][col-1] = 2;
            depthQueue.push([row, col-1]);
        }

        // check left
        if(grid[row-1] && grid[row-1][col] === 1){
            freshOranges--;
            grid[row-1][col] = 2;
            depthQueue.push([row-1, col]);
        }

        // check right
        if(grid[row+1] && grid[row+1][col] === 1){
            freshOranges--;
            grid[row+1][col] = 2;
            depthQueue.push([row+1, col]);
        }
    }
};
