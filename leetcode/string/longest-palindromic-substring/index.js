/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   // Approach 4.1: Expand Around Center
//   let start = 0;
//   let end = 0;
//   let num = 0;
//   for (let i = 0; i < s.length; i++) {
//     num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
//     if (num > end - start) {
//       start = i - Math.floor((num - 1) / 2);
//       end = i + Math.floor(num / 2);
//     }
//   }
//   return s.slice(start, end + 1);
// };

// function expandAroundCenter(s, left, right) {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return right - left - 1;
// };

var longestPalindrome = function(s) {
    // Approach 4.2: Expand Around Center
    let max = '';
    for (let i = 0; i < s.length; i++) {
        // second loop is needed because
        // palindrome can be like 'aba' and 'abba'
        for (let j = 0; j <= 1; j++) {
            let left = i;
            let right = i + j;
            while (left >= 0 && s[left] === s[right]) {
                left--;
                right++;
            }
            // note that we decrement start(left) and increment end (right)
            // during the last while loop
            // so we need to take into account of that
            left += 1;
            right -= 1;
            if (right - left + 1 > max.length) {
                // .substring extracts the characters in a string
                // between "start" and "end",
                // not including "end" itself
                max = s.substring(left, right + 1);
            }
        }
    }
    return max;
};
