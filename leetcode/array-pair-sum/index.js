'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sorted = nums.sort((a,b) => a-b);
    // let size 2;
    // let chank = 0;
    let result = 0;
    for(let i = 0; i < sorted.length; i++){
        if(i%2 === 0){
            result = result + sorted[i];
        }
    }
    return result;
};

 let temp = arrayPairSum([1,4,3,2]);
 console.log(temp);
