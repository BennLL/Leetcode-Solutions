/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    ans = []
    for(i = 0; i < n; i++){
        ans.push(nums[i]);
        ans.push(nums[i+n])
    }
    return ans;
};