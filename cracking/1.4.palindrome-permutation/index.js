// Palindrome Permutation: Given a string, write a function to check
// if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards,
// A permutation is a rearrangement of letters. T
// he palindrome does not need to be limited to just dictionary words.
//     EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat""atco eta" etc.)


function isPermutationOfPalindrome(phrase) {
    let countOdd = 0;
    let storage = {};
    for(let i = 0; i < phrase.length; i++){
        if(phrase[i] === ' ') {
            continue;
        }
        let char = phrase[i].toLowerCase();
        if(!storage[char]){
            storage[char] = 1;
        } else {
            storage[char]++;
        }
        if(storage[char] % 2 !== 0){
            countOdd++;
        } else {
            countOdd--;
        }
    }
    return countOdd <=1;
}

let result = isPermutationOfPalindrome('Tact Coa');
console.log(result);
