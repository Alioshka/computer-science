const maxDiff = function(nums) {
    let length = nums.length - 1;
    let result = -1;

   for(let i = 0, j = length; i < j; i++, j--){
       for(let i2 = i; i2 < j; i2++){
           let temp = nums[j] - nums[i2];
           if(temp > result){
               result = temp;
           }
       }
    }

   return result;
};

let result = maxDiff([7, 1, 2, 5]);
console.log(result); // 4

result = maxDiff([7, 5, 3, 1]);
console.log(result); // -1

const maxDiff2 = function(nums) {
    let result = -1;

    if(nums.length <= 1){
        return result;
    }

    let maxDiff = nums[1] - nums[0];
    let minElement = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] - minElement > maxDiff){
            maxDiff = nums[i] - minElement;
        }
        if(nums[i] < minElement){
            minElement = nums[i];
        }
    }

    return maxDiff > 0 ? maxDiff : result;
};

// Time Complexity : O(n)

result = maxDiff2([7, 1, 2, 5]);
console.log(result); // 4

result = maxDiff2([7, 5, 3, 1]);
console.log(result); // -1

result = maxDiff2([1, 2, 7, 5]);
console.log(result); // 6
