// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
//     A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//     Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//     Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.

const mappings = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (!digits || digits.length === 0) return [];
    if (digits.length === 1) {
        return mappings[digits];
    }

    let result = [];
    let set1 = letterCombinations(digits.substr(0, 1));
    let set2 = letterCombinations(digits.substr(1));

    for (let i = 0; i < set1.length; i++) {
        for (let j = 0; j < set2.length; j++) {
            result.push(set1[i] + set2[j]);
        }
    }

    return result;
};
