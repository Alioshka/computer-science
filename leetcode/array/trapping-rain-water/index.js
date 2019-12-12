// https://leetcode.com/problems/trapping-rain-water/discuss/400555/Clean-JavaScript-solutions-(brute-force-dynamic-programming-stack-two-pointers)
// https://github.com/Hongbo-Miao/leetcode

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
//Two pointers
// time O(n)
// space O(1)

    if (height == null || height.length === 0) return 0;

    let l = 0;
    let r = height.length - 1;

    let lMax = 0;
    let rMax = 0;

    let res = 0;

    while (l < r) {
        lMax = Math.max(lMax, height[l]);
        if (height[l] < lMax) {
            res += lMax - height[l];
        }

        rMax = Math.max(rMax, height[r]);
        if (height[r] < rMax) {
            res += rMax - height[r];
        }

        height[l] < height[r] ? l++ : r--;
    }

    return res;
};

