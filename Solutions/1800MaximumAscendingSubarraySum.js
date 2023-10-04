/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    sum = 0;
    max = 0;
    for(i = 0; i < nums.length; i++){
        sum += nums[i];
        if(nums[i + 1] > nums[i]){
        }
        if(nums[i + 1] <= nums[i]){
            if(sum > max){max = sum}
            sum = 0;
        }
    }

    return max > sum ? max : sum;
};