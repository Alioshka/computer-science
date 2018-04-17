// function reverseString(str) {
//     // implement me
// }
//
// reverseString('Greetings from the interview'); // should return'weivretni eht morf sgniteerG'

// 1.
function reverseString1(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString1('Greetings from the interview'));

// 2
function reverseString2(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString2('Greetings from the interview'));

// 3.
function reverseString3(str) {
    if(!str){
        return '';
    }
    if(str.length <= 1){
        return str;
    }
    return str.charAt(str.length - 1) + reverseString3(str.substr(1, str.length - 2)) + str.charAt(0);
}
console.log(reverseString3('Greetings from the interview'));