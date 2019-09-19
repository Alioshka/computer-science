// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.
//
//     Example 1:
//
// Input:
//     11110
// 11010
// 11000
// 00000
//
// Output: 1
// Example 2:
//
// Input:
//     11000
// 11000
// 00100
// 00011
//
// Output: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0;
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] == 1) {
                num++;
                exploreIsland(grid, i, j);
            }
        }
    }
    return num;
};

function exploreIsland(grid, rid, cid) {
    if(rid<grid.length - 1 && grid[rid+1][cid] == 1){
        grid[rid+1][cid] = 0;
        exploreIsland(grid, rid+1, cid);
    }

    if(rid>0 && grid[rid-1][cid] == 1) {
        grid[rid-1][cid] = 0;
        exploreIsland(grid, rid-1, cid);
    }

    if(cid<grid[0].length && grid[rid][cid+1] == 1) {
        grid[rid][cid+1] = 0;
        exploreIsland(grid, rid, cid+1);
    }

    if(cid>0 && grid[rid][cid-1] == 1) {
        grid[rid][cid-1] = 0;
        exploreIsland(grid, rid, cid-1);
    }
}
