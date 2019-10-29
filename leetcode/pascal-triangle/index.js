/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    if(numRows <= 0) {
        return result;
    }

    // fill row #0
    result[0] = [1];

    for(let i = 1; i < numRows; i++){
        // first element in a row is always 1
        result[i] = [1];

        // this loop never happends for row #1
        for(let j = 1; j < i; j++){
            result[i].push(result[i-1][j-1] + result[i-1][j])
        }

        // last element in a row is always 1
        result[i].push(1);
    }

    return result;
};
