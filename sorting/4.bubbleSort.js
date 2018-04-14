var bubbleSort = nums => {
   do {
       var swapped = false;
       for (var i = 0; i < nums.length; i++) {
           if (nums[i] > nums[i+1]) {
               var temp = nums[i];
               nums[i] = nums[i+1];
               nums[i+1] = temp;
               swapped = true;
           }
       }
   } while(swapped);
};

var nums = [10,5,3,8,2,6,4,7,9,1];
bubbleSort(nums);
console.log(nums);