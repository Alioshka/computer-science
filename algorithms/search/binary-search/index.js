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

const states = [
    'Alabama','Alaska','American Samoa','Arizona','Arkansas',
    'California','Colorado','Connecticut','Delaware','District of Columbia',
    'Federated States of Micronesia','Florida','Georgia','Guam',
    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
    'Kentucky','Louisiana','Maine','Marshall Islands','Maryland',
    'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
    'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
    'North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma',
    'Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina',
    'South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia',
    'Washington','West Virginia','Wisconsin','Wyoming'];

module.exports = {
    binarySearch
};
