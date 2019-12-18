// https://leetcode.com/problems/unique-paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
// 1) brute force solution
// Time O(mn)
// Space O(mn)

// init first row and col to 1, and the rest to 0
    const matrix = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) row.push(1);
            else row.push(0);
        }
        matrix.push(row);
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m - 1][n - 1];
};

/**
 var uniquePaths = function(m, n) {
// 2) Dynamic programming
// Time O(mn)
// Space O(n)
//
// Example
// 1   1  (1)  1  1  1  (init current row to 1)
// 1  (2) (3)  4  5  6  (e.g. 3 = 1 + 2)
// 1   3   6  10 15 21  (return the last number in the last row which is 21)
  const row = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      row[j] += row[j - 1];
    }
  }
  return row[n - 1];
};
 */
