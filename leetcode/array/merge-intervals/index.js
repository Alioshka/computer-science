// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let result = [];
    let prev = null;
    for(let el of intervals){
        if (prev && el[0] <= prev[1]) {
            result[result.length - 1][1] = Math.max(el[1], prev[1]);
        } else {
            result.push(el);
        }
        prev = result[result.length - 1];
    }
    return result;
};

// merge([[1,3],[2,6],[8,10],[15,18]]);
// merge([[2,3],[5,5],[2,2],[3,4],[3,4]]);
// merge([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]]);
