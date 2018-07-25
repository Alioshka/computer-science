function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord.length){
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog Carlos'));

function findLongestWord2(str) {
    let longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
}
console.log(findLongestWord2('The quick brown fox jumped over the lazy dog Carlos'));

// function findLongestWords2(str) {
//     let results = [];
//     let longestWords = str.split(' ').sort(function(a, b) { return b.length - a.length; });
//     results.push(longestWords[0]);
//     for(let i = 1; i < longestWords.length-1; i++){
//         if (longestWords[i].length === results[0].length) {
//             results.push(longestWords[i]);
//         } else {
//             break;
//         }
//     }
//     return results;
// }
// console.log(findLongestWords2('The quick brown fox jumped over the lazy dog Carlos'));

function findSmallestWord(str) {
    let strSplit = str.split(' ');
    let smallestWord = null;
    for(let i = 0; i < strSplit.length; i++){
        if(!smallestWord){
            smallestWord = strSplit[i];
        }
        if(strSplit[i].length < smallestWord.length){
            smallestWord = strSplit[i];
        }
    }
    return smallestWord;
}
console.log(findSmallestWord('The quick brown fox jumped over the lazy dog'));

function findSmallestWord2(str) {
    let smallestWords = str.split(' ').sort((a, b) => a.length - b.length);
    return smallestWords[0];
}
console.log(findSmallestWord2('The quick brown fox jumped over the lazy dog'));