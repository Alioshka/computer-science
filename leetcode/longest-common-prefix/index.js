// Write a function to find the longest common prefix string amongst an array of strings.
//
//     If there is no common prefix, return an empty string "".
//
//     Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//     Note:
//
// All given inputs are in lowercase letters a-z.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return '';
    }
    if(strs.length === 1){
        return strs[0];
    }

    const maxPrefixLength = strs[0].length;
    let p = 0;

    while(p < maxPrefixLength){
        let i = 1;
        for(; i < strs.length && strs[i][p] === strs[0][p]; i++){

        }
        if(i !== strs.length) return strs[0].slice(0, p);
        p++;
    }

    return strs[0]
};
