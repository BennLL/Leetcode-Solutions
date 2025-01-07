/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = Array.from(new Set(nums)).sort(function(a,b){return b - a});
    return nums.length >= 3 ? nums[2] : nums[0];
};