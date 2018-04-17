function palindrome(str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");

function palindrome2(str) {
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');

    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
palindrome2("A man, a plan, a canal. Panama");