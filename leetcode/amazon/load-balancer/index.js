// https://leetcode.com/discuss/interview-question/506287/

// This can be solved using two pointers: function solve()
//
//     left_index initially points to the second value from the left.
//     right_index initially points to the second value from the right.
//     The values at those indexes will be dropped.
//     We need to keep track of the following sums:
//
//     total_sum is the total sum of all values in the input.
//     left_sum is the sum of all values with an index < left_index.
//     right_sum is the sum of all values with an index > right_index.
//     drop_sum is the sum of the values at left_index and right_index.
//     mid_sum is obtained by subtracting left_sum, right_sum and drop_sum from the total_sum.
//     Balancing is possible if left_sum == mid_sum == right_sum.
//
//     At every step we move the left_index to the right if the left_sum is smaller or equal to the right_sum.
//     Otherwise we move the right_index to the left.
//
//     Time complexity: O(n)
//     Space complexity: O(1)

function solve(nums){
     if(nums.length < 5){
         return false;
     }

    let total_sum = 0;
    let left_index = 1;
    let right_index = nums.length - 2;
    let left_sum = nums[0];
    let right_sum = nums[nums.length - 1];

    nums.forEach(num => total_sum += num);

    while(left_index < right_index){
        let drop_sum = nums[left_index] + nums[right_index];
        let mid_sum = total_sum - drop_sum - left_sum - right_sum;

        if(mid_sum < left_sum || mid_sum < right_sum) return false;

        if(left_sum === mid_sum && left_sum === right_sum) return true;

        if(left_sum <= right_sum){
            left_sum += nums[left_index];
            left_index += 1;
        } else {
            right_sum += nums[right_index];
            right_index -= 1;
        }
    }

    return false;
}

function solve2(nums){
    let sum = 0;
    nums.forEach(num => sum += num);

    let l = 0;
    let r = nums.length - 1;
    let sumL = nums[l];
    let sumR = nums[r];
    while(l < r) {
        if(sumL === sumR){
            if(sumL === sum - sumL*2 - nums[l+1] - nums[r-1] && r - l > 1){
                return true;
            } else {
                l++;
                r--;
                sumL +=nums[l];
                sumR +=nums[r];
            }
        }else if(sumL > sumR) {
            r--;
            sumR += nums[r];
        }else{
            l++;
            sumL += nums[l];
        }
    }
    return false;
}

let res1_1 = solve([1, 3, 4, 2, 2, 2, 1, 1, 2]); // return true
let res1_2 = solve([1, 1, 1, 1, 1, 1]); // return false

let res2_1 = solve2([1, 3, 4, 2, 2, 2, 1, 1, 2]); // return true
let res2_2 = solve2([1, 1, 1, 1, 1, 1]); // return false
console.log(res1_1);
