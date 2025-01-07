/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    ans = [];
    sum = 0;
    for(i = 0; i < nums.length; i++){
        ans.push(sum += nums[i]);
    }

    return ans;
};