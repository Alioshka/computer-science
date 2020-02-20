// https://leetcode.com/problems/valid-parentheses/
// 20. Valid Parentheses
//
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Note that an empty string is also considered valid.
//
//     Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ')':'(',
        '}':'{',
        ']':'['
    };

    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            stack.push(s[i]); // this is an open bracket;
        } else {
            // this is an closing bracket
            if(map[s[i]] !== stack.pop()) return false
        }
    }

    return stack.length === 0;
};
