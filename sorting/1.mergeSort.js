function mergeSort(nums) {
    if (nums.length < 2) {
        return nums;
    }

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return results.concat(left, right);
}

let nums = [1,2,3,8,5,6,4,7,9,10];
let sortedNums = mergeSort(nums);
console.log('nums:');
console.log(nums);
console.log('sorted nums:');
console.log(sortedNums);