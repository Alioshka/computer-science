'use strict';

function swap(array, i, j){
    if(array[i] !== array[j]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // [array[i], array[j]] = [array[j], array[i]];
    }
}

function pivot(arr, start = 0, end = arr.length - 1) {
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let pivotIndex = start;

    // 1. moving everything that less then pivot to the left(beginning of array) before pivot itself
    // and increase pivot index to track correct pivot place in the array
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    // Swap the pivot from the start to the pivotIndex
    swap(arr, start, pivotIndex);
    return pivotIndex;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

module.exports = {
    quickSort,
    quickSort2
};

// alternative solution:
function quickSort2(nums) {
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

    return [...quickSort2(left), pivot, ...quickSort2(right)];
    // or without spread operator with concat:
    // return quickSort(left).concat(pivot, quickSort(right));
}
