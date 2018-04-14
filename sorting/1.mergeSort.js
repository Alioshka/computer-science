const mergeSort = nums => {
    if (nums.length < 2) {
        return nums;
    }
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const results = [];

    while (left.length && right.length) {

        if (left[0] <= right[0]) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }
    return results.concat(left, right);
};
var nums = [1,2,3,8,5,6,4,7,9,10];
var sortedNums = mergeSort(nums);
console.log('****SORTED ARRAY***');
console.log(sortedNums);
