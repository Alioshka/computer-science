/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let length = matrix.length - 1;
    for (let row = 0; row < length; row++) {
        for (let col = row; col < length - row; col++) {
            swap(row, col, length, matrix);
        }
    }
};

function swap(row, col, len, matrix) {
    let _ = matrix[len - col][row];
    matrix[len - col][row] = matrix[len - row][len - col];
    matrix[len - row][len - col] = matrix[col][len - row];
    matrix[col][len - row] = matrix[row][col];
    matrix[row][col] = _;
}

let data = [[1,2,3],[4,5,6],[7,8,9]];

rotate(data);
console.log(data); // [[7,4,1],[8,5,2],[9,6,3]]
