function replaceString(str, length){
    str = str.split('');
    let spaces = 0;
    for(let i = length - 1; i > 0; i--) {
        if(str[i] === ' ') {
            spaces += 2;
        }
    }

    let index = length + spaces;

    for(let i = length - 1; i >= 0; i--) {
        if(str[i] === ' ') {
            str[index - 1] = '0';
            str[index - 2] = '2';
            str[index - 3] = '%';
            index = index - 3;
        } else {
            str[index - 1] = str[i];
            index--;
        }
    }
    return str.join('');
}

let data = replaceString('Mr John Smith    ', 13);
console.log(data); // 'Mr%20John%20Smith'
