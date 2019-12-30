// https://leetcode.com/problems/search-a-2d-matrix/discuss/465588/javascript-code-for-solution

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowL = matrix.length;
    if (rowL == 0) return false;
    let colL = matrix[0].length;

    // binary search
    let left = 0;
    let right = rowL * colL - 1;

    let pivotIdx;
    let pivotElement;

    while (left <= right) {
        pivotIdx = Math.floor((left + right) / 2);
        // row = index / colL and col = index % colL.
        pivotElement = matrix[Math.floor(pivotIdx / colL)][pivotIdx % colL];
        if (target === pivotElement) return true;
        else {
            if (target < pivotElement) right = pivotIdx - 1;
            else left = pivotIdx + 1;
        }
    }
    return false;
};
