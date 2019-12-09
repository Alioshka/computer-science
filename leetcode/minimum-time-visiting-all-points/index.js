// https://leetcode.com/problems/minimum-time-visiting-all-points/discuss/447531/JavaScript-solution

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let [current, ...rest] = points;
    let time = 0;
    for (const point of rest) {
        time += distance(current, point);
        current = point;
    }
    return time;
};

function distance(from, to) {
    const [x1, y1] = from;
    const [x2, y2] = to;
    const d1 = Math.abs(x1 - x2);
    const d2 = Math.abs(y1 - y2);
    return Math.max(d1, d2);
}
