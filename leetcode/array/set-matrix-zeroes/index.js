// https://leetcode.com/problems/set-matrix-zeroes/submissions/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowL = matrix.length;
    let colL = matrix[0].length;

    let rowSetToZero = {};
    let colSetToZero = {};

    for(let row = 0; row < rowL; row++){
        for(let col = 0; col < colL; col++){
            if(matrix[row][col] === 0){
                rowSetToZero[row]=true;
                colSetToZero[col]=true;
            }
        }
    }

    for(let row = 0; row < rowL; row++){
        for(let col = 0; col < colL; col++){
            if(rowSetToZero[row] || colSetToZero[col]){
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
};
