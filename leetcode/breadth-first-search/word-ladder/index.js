// https://leetcode.com/problems/word-ladder/
// 127. Word Ladder
// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
//
// Only one letter can be changed at a time.
//     Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
//     Note:
//
// Return 0 if there is no such transformation sequence.
//     All words have the same length.
//     All words contain only lowercase alphabetic characters.
//     You may assume no duplicates in the word list.
//     You may assume beginWord and endWord are non-empty and are not the same.
//     Example 1:
//
// Input:
//     beginWord = "hit",
//         endWord = "cog",
//         wordList = ["hot","dot","dog","lot","log","cog"]
//
// Output: 5
//
// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:
//
// Input:
//     beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
//
// Output: 0
//
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let len = 1;
    let queue = [beginWord];
    const dict = new Set(wordList);
    const seen = new Set(queue);

    while (queue.length) {
        const next = [];
        for (let v of queue) {
            if (v === endWord) {
                return len;
            }

            const arr = v.split('');
            for (let i = 0; i < arr.length; i++) {
                for (let d = 0; d < 26; d++) {
                    arr[i] = String.fromCharCode(97+d); // 97 -> 'a' https://asecuritysite.com/coding/asc2
                    const nv = arr.join('');
                    if (!seen.has(nv) && dict.has(nv)) {
                        next.push(nv);
                        seen.add(nv);
                    }
                    arr[i] = v[i];
                }
            }
        }
        queue = next;
        len++;
    }

    return 0;
};
