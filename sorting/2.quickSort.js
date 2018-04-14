const quickSort = nums => {
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length-1];
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        }
        else {
            right.push(nums[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
const sorted = quickSort(input);
console.log('****SORTED ARRAY***');
console.log(sorted);