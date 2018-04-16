function quickSort(nums) {
    if (nums.length < 2) {
        return nums;
    }

    const pivot = nums[nums.length-1];
    let left = [];
    let right = [];

    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
    // or without spread operator with concat:
    // return quickSort(left).concat(pivot, quickSort(right));
}

let nums = [1,2,3,8,5,6,4,7,9,10];
let sortedNums = quickSort(nums);
console.log('nums:');
console.log(nums);
console.log('sorted nums:');
console.log(sortedNums);