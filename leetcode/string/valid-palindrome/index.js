/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleared = s.replace(/[^a-zA-Z0-9]/g , '').toLowerCase();

    // solution 1
    // return cleared === cleared.split('').reverse().join('');

    // solution 2
    let start = 0;
    let end = cleared.length - 1;
    while(start < end){
        if(cleared[start] !== cleared[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

// similar solution:
// https://gist.github.com/Alioshka/7a6050734e3c2164214a18ab1e9b62d8
