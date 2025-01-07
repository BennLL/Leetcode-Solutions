/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    ans = 1;
    for(i = 0; i < nums.length; i++){
        if(nums[i] == 0){return 0}
        nums[i] > 0 ? ans *= 1 : ans *= -1;
    }

    return ans;
};