// https://leetcode.com/problems/max-area-of-island/discuss/494446/javascript-simple-brute-force-solution
// 695. Max Area of Island
// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
//
// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
//
// Example 1:
//
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
//     Example 2:
//
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                max = Math.max(exploreIsland(grid, i, j), max);
            }
        }
    }
    return max;
};

function exploreIsland(grid, i, j){
    let area = 1;
    grid[i][j] = true;

    const _i = i;
    const _j = j;

    // check up
    while(grid[i][j+1] === 1){
        area = area + exploreIsland(grid, i, j+1);
        // area += 1;
        grid[i][j+1] = true;
        j += 1;
    }
    j = _j; // reset to initial

    // check down
    while(grid[i][j-1] === 1){
        area = area + exploreIsland(grid, i, j-1);
        // area += 1;
        grid[i][j-1] = true;
        j -= 1;
    }
    j = _j; // reset to initial

    // check left
    while(grid[i-1] && grid[i-1][j] === 1){
        area = area + exploreIsland(grid, i-1, j);
        grid[i-1][j] = true;
        i -= 1;
    }
    i = _i; // reset to initial

    // check right
    while(grid[i+1] && grid[i+1][j] === 1){
        area = area + exploreIsland(grid, i+1, j);
        grid[i+1][j] = true;
        i += 1;
    }

    return area;
}
