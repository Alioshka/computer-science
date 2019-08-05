'use strict';

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    // version 1
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
    // version 2
    // return arr[middle] === elem ? middle : -1;

}

module.exports = {
    binarySearch
};
