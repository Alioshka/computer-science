// https://leetcode.com/problems/insert-interval/submissions/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
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
