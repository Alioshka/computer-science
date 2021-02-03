'use strict';

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

module.exports = {
    quickSort,
    quickSort2 // just for the reference, complicated for coding on the white board approach
};

// from Colt lectures:

function quickSort2(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort2(arr,left,pivotIndex-1);
        //right
        quickSort2(arr,pivotIndex+1,right);
    }
    return arr;
}

function swap(array, i, j){
    if(array[i] !== array[j]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // [array[i], array[j]] = [array[j], array[i]];
    }
}

function pivot(arr, startIndex = 0, end = arr.length - 1) {
    // We are assuming the pivot is always the first element
    let pivot = arr[startIndex];
    let pivotIndex = startIndex;

    // 1. moving everything that less then pivot to the left(beginning of array) before pivot itself
    // and increase pivot index to track correct pivot place in the array
    for (let i = startIndex + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    // Swap the pivot from the startIndex to the pivotIndex
    swap(arr, startIndex, pivotIndex);
    return pivotIndex;
}
