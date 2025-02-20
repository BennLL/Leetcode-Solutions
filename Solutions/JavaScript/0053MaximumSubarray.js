/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let total = 0;

    for(let i = 0; i < nums.length; i++){
        if(total < 0){
            total = 0;
        }

        total += nums[i];
        ans = Math.max(ans, total);
    }

    return ans;
};