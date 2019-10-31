/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle.length){
        return 0;
    }
    let index = -1;
    for (let i = 0; i<haystack.length; i++){
        if(haystack[i]===needle[0]){
            index = compare(haystack, i, needle);
            if(index !== -1) return index;
        }
    }
    return index;

};

function compare(haystack, haystackIndex, needle){
    let index = -1;
    for(let i = 0; i < needle.length; i++){
        if(haystack[haystackIndex+i] !== needle[i]){
            return index;
        }
    }
    index = haystackIndex;
    return index;
}

let index = strStr('aaa', 'a');
console.log(index);
