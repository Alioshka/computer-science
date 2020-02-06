// 417. Pacific Atlantic Water Flow

// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
//
//     Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
//
//     Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.
//
//     Note:
//
// The order of returned grid coordinates does not matter.
//     Both m and n are less than 150.
//
//
// Example:
//
//     Given the following 5x5 matrix:
//
//     Pacific ~   ~   ~   ~   ~
//     ~  1   2   2   3  (5) *
// ~  3   2   3  (4) (4) *
// ~  2   4  (5)  3   1  *
// ~ (6) (7)  1   4   5  *
// ~ (5)  1   1   2   4  *
// *   *   *   *   * Atlantic
//
// Return:
//
//     [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

// first:
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if (!matrix.length) {
        return [];
    }
    let pacific = make(matrix);
    let atlantic = make(matrix);
    for (let row = 0; row < matrix.length; row++) {
        bfs(row, 0, pacific, matrix);
        bfs(row, matrix[0].length - 1, atlantic, matrix);
    }
    for (let col = 0; col < matrix[0].length; col++) {
        bfs(0, col, pacific, matrix);
        bfs(matrix.length - 1, col, atlantic, matrix);
    }
    return union(atlantic, pacific);
};

function make(matrix){
    return new Array(matrix.length)
        .fill()
        .map(row => new Array(matrix[0].length)
            .fill(false));
}

function bfs(x, y, ocean, matrix) {
    let q = [[x, y]];
    ocean[x][y] = true;
    while (q.length) {
        let [i, j] = q.shift();
        for (let [newI, newJ] of [[i , j+1], [i+1, j], [i, j-1], [i-1, j]]) {
            if (newI >= 0 && newI < ocean.length && newJ >= 0 && newJ < ocean[0].length) {
                if (matrix[i][j] <= matrix[newI][newJ] && !ocean[newI][newJ]) {
                    q.push([newI, newJ]);
                    ocean[newI][newJ] = true;
                }
            }
        }
    }
}

function union(atlantic, pacific) {
    let union = [];
    for (let i = 0; i < atlantic.length; i++) {
        for (let j = 0; j < atlantic[0].length; j++) {
            if (atlantic[i][j] && pacific[i][j]) {
                union.push([i, j]);
            }
        }
    }
    return union;
}

// second Doronin:
// const UNKNOWN = -999;
// const NONE = 0;
// const PACIFIC = 1 << 0;
// const ATLANTIC = 1 << 1;
// const PACIFIC_ATLANTIC = PACIFIC | ATLANTIC;
//
// function explore(h, row, col, rowLen, colLen, matrix, discovered) {
//     if (row < 0 || col < 0) return PACIFIC;
//     if (row === rowLen || col === colLen) return ATLANTIC;
//     if (h < matrix[row][col]) return NONE;
//
//     if (discovered[row][col] === UNKNOWN) {
//         const ch = matrix[row][col];
//         discovered[row][col] = NONE;
//         let result = (
//             explore(ch, row - 1, col, rowLen, colLen, matrix, discovered) |
//             explore(ch, row + 1, col, rowLen, colLen, matrix, discovered) |
//             explore(ch, row, col - 1, rowLen, colLen, matrix, discovered) |
//             explore(ch, row, col + 1, rowLen, colLen, matrix, discovered)
//         )
//         discovered[row][col] = UNKNOWN;
//         return result;
//     }
//     return discovered[row][col];
// }
//
//
// /**
//  * @param {number[][]} matrix
//  * @return {number[][]}
//  */
// var pacificAtlantic = function(matrix) {
//     const ans = [];
//
//     const rowLen = matrix.length;
//     if (rowLen === 0) return ans;
//
//     const colLen = matrix[0].length;
//     if (colLen === 0) return ans;
//
//     const discovered = [];
//     for (let row = 0; row < rowLen; row++) {
//         discovered[row] = [];
//         for (let col = 0; col < colLen; col++) {
//             discovered[row][col] = UNKNOWN;
//         }
//     }
//
//     for (let row = 0; row < rowLen; row++) {
//         for (let col = 0; col < colLen; col++) {
//             discovered[row][col] = explore(matrix[row][col], row, col, rowLen, colLen, matrix, discovered);
//             if (discovered[row][col] === PACIFIC_ATLANTIC) {
//                 ans.push([row, col]);
//             }
//         }
//     }
//
//     return ans;
// };
