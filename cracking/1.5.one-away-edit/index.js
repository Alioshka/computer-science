function oneEditAway(str1, str2){
    if(str1.length === str2.length){
        return _oneEditReplace(str1, str2);
    } else if (str1.length + 1 === str2.length){
        return _oneEditInsertAway(str1, str2);
    } else if (str1.length - 1 === str2.length){
        return _oneEditInsertAway(str1, str2);
    }
    return false;
}

function _oneEditReplace(str1, str2) {
    let foundDifference = false;
    for(let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            if (foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return true;
}

function _oneEditInsertAway(str1, str2) {
    let index1 = 0;
    let index2 = 0;
    while (index1 < str1.length && index2 < str2.length) {
        if (str1[index1] !== str2[index2]) {
            if(index1 !== index2) {
                return false;
            }
            if(str1.length > str2.length){
                index1++;
            } else {
                index2++
            }
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}

let result;
result = oneEditAway('pale', 'ple'); // true
result = oneEditAway('ple', 'pale'); // true
result = oneEditAway('pales', 'pale'); // true
result = oneEditAway('pale', 'bale'); // true
result = oneEditAway('pale', 'bae'); // false
console.log(result);
