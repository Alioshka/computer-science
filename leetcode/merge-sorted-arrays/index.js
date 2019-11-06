// https://leetcode.com/problems/merge-sorted-array/submissions/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
//     Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
//     You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold
//     additional elements from nums2.
//     Example:
//
// Input:
//     nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer1 = m -1;
    let pointer2 = n -1;

    let pointer = m+n-1;

    while(pointer1 >= 0 && pointer2 >=0){
        if(nums1[pointer1] < nums2[pointer2]){
            nums1[pointer] = nums2[pointer2];
            pointer2--;
        }else{
            nums1[pointer] = nums1[pointer1];
            pointer1--;
        }
        pointer--;
    }

    // if something left in nums2
    while(pointer2 >= 0 && pointer >= 0){
        nums1[pointer] = nums2[pointer2];
        pointer--;
        pointer2--;
    }
};
