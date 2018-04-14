var insertionSort = nums => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                let spliced = nums.splice(i, 1);
                nums.splice(j, 0, spliced[0]);
            }
        }
    }
};
var nums = [1,2,3,8,5,6,4,7,9,10];
insertionSort(nums);
console.log('****SORTED ARRAY***');
console.log(nums);
