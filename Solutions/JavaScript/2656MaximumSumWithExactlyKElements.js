/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums = nums.sort(function(a,b){return a-b});
    sum = 0;
    for(i = 0; i < k; i++){
        sum += nums[nums.length - 1];
        nums[nums.length - 1] = nums[nums.length - 1] + 1;
    }
    return sum;
};