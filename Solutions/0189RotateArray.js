/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums = nums.reverse();
    for(i = 0; i < k * 2 + 1; i++){
        if(i < k){
            nums.push(nums[i]);
        }
        if(i == k){
            nums = nums.reverse();
        }
        if(i > k){
            nums.pop();
        }
    }
};