// https://leetcode.com/problems/count-servers-that-communicate/submissions/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let rowL = grid.length;
    let colL = grid[0].length;

    let rowMap = {};
    let colMap = {};
    let connectedServers = 0;

    for(let row = 0; row < rowL; row++){
        for(let col = 0 ; col < colL; col++){
            if(grid[row][col] === 1){
                rowMap[row] ? rowMap[row] = rowMap[row] + 1 : rowMap[row] = 1;
                colMap[col] ? colMap[col] = colMap[col] + 1 : colMap[col] = 1;
                connectedServers++;
            }
        }
    }

    for(let row = 0; row < rowL; row++){
        for(let col = 0 ; col < colL; col++){
            if(grid[row][col] === 1){
                if(rowMap[row] === 1 && colMap[col] === 1){
                    // this means only one server in this column or row
                    // as we made counter up before , we put it down here
                    connectedServers--;
                }
            }
        }
    }

    return connectedServers;
};
