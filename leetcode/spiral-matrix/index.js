// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:
//
// Input:
//     [
//         [ 1, 2, 3 ],
//         [ 4, 5, 6 ],
//         [ 7, 8, 9 ]
//     ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
//
// Input:
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9,10,11,12]
//     ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length){
        return [];
    }

    //Use 4 pointes to create wall around the shape
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let colStart = 0;
    let colEnd = matrix[0].length - 1;

    let result = [];

    while(rowStart <= rowEnd && colStart <= colEnd){

        // move right
        for(let i = colStart; i <= colEnd; i++){
            result.push(matrix[rowStart][i]);
        }
        rowStart++; // moark row as traversed after moving right

        // move down
        for(let i = rowStart; i<=rowEnd; i++){
            result.push(matrix[i][colEnd]);
        }
        colEnd--; //mark column as traversed after moving down

        // move left
        if(rowStart <= rowEnd){
            for(let i=colEnd; i>=colStart; i--){
                result.push(matrix[rowEnd][i])
            }
        }
        rowEnd--; // moark row as traversed after moving left

        // move up
        if(colStart <= colEnd){
            for(let i=rowEnd; i>=rowStart; i--){
                result.push(matrix[i][colStart])
            }
        }
        colStart++; //mark column as traversed after moving up
    }

    return result;
};

module.exports = {
    spiralOrder
};
