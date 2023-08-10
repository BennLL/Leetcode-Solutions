/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort(function(a,b){return a-b;})
    front = (nums[nums.length - 1] * nums[0] * nums[1]);
    back = (nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
    return front > back ? front : back;
};