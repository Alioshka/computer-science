/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length <= 1){
        return 0;
    }

    nums.sort((a,b) => a-b);

    let maxDiff = nums[1] - nums[0];

    for(let i = 1; i < nums.length - 1; i++){
        if(nums[i+1] - nums[i] > maxDiff){
            maxDiff = nums[i+1] - nums[i];
        }
    }

    return maxDiff;
};

let result = maximumGap([1,3,100]);
console.log(result); // 97
