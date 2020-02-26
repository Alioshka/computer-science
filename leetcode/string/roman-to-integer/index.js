/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s || s.length === 0) return 0;
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let i = s.length - 1;
    let result = map[s[i]];
    let curr = '';
    let prev = '';
    while (i > 0) {
        curr = map[s[i]];
        prev = map[s[i - 1]];

        if (prev >= curr) {
            result += prev;
        } else {
            result -= prev;
        }

        i--;
    }

    return result;
};
