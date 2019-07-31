'use strict';

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let storage = {};
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        if(!storage[arr[i]]){
            storage[arr[i]] = true;
            count++;
        }
    }
    return count;
}

module.exports = {
    countUniqueValues
};
