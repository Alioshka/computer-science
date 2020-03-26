// You are given with a string . Your task is to remove atmost two substrings of any length from the given string such that the remaining string contains vowels('a','e','i','o','u') only. Your aim is the maximise the length of the remaining string. Output the length of remaining string after removal of atmost two substrings.
//     NOTE: The answer may be 0, i.e. removing the entire string.
//

// Sample Input
// 2
// earthproblem
// letsgosomewhere

// Sample Output
// 3
// 2

// O(N) and O(1) solution
// Since we can only remove two substrings in the original string, this problem can be translated into this equivalent one: find the longest substring in S that all the chars in this substring are vowels.
// Be careful, we do not consider the all-vowels-substring which begin from the start and from the end when finding the longest, we just count them and add it to the final result.
// a a a y y y a a y y a y a a a y a y a a a
// ^ ^ ^ - - - * * - - * - * * * - * - ^ ^ ^
// The longest continuous all-vowels-substring is "aaa" start at index 12,
// so we keep this substrings and the first 3 chars and the last 3 chars to get the answer 9.
// Its valid since we only remove two substrings in this case.

function longestString(s){
    let len = s.length;
    let start = 0;
    let end = len - 1;
    const vowel = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    };

    while(start < len && vowel[s[start]]){
        ++start;
    }

    while(end >= 0 && vowel[s[end]]){
        --end;
    }

    // checking area come to [start, end]
    if(start >= len) return len;

    let res = start + len - 1 - end;
    let longest = 0;
    let sum = 0;

    for(let i = start + 1; i <= end; ++i){
        if(vowel[s[i]]){
            ++sum;
        } else {
            sum = 0;
        }
        longest = Math.max(sum, longest);
    }
    return longest + res;
}

let res1 = longestString('earthproblem'); // 3
let res2 = longestString('letsgosomewhere'); // 2
let res3 = longestString('aaayyyaayyayaaayayaaa'); // 9

console.log(res1, res2, res3);

