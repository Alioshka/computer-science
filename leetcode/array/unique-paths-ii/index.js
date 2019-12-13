// https://leetcode.com/problems/unique-paths-ii/

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.
//
// Note: m and n will be at most 100.
//
// Example 1:
// Input:
//     [
//         [0,0,0],
//         [0,1,0],
//         [0,0,0]
//     ]
// Output: 2
// Explanation:
//     There is one obstacle in the middle of the 3x3 grid above.
//     There are two ways to reach the bottom-right corner:
//     1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let rowLen = obstacleGrid.length;
    let colLen = obstacleGrid[0].length;

    // If the starting cell has an obstacle, then simply return as there would be
    // no paths to the destination.
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    // Number of ways of reaching the starting cell = 1.
    obstacleGrid[0][0] = 1;

    // Filling the values for the first column
    for (let i = 1; i < rowLen; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1) ? 1 : 0;
    }

    // Filling the values for the first row
    for (let i = 1; i < colLen; i++) {
        obstacleGrid[0][i] = (obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1) ? 1 : 0;
    }

    // Starting from cell(1,1) fill up the values
    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if (obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }

    // Return value stored in rightmost bottommost cell. That is the destination.
    return obstacleGrid[rowLen - 1][colLen - 1];
};
