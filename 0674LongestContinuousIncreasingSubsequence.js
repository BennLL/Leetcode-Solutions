/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    max = 0;
    count = 0;
    for(i = 0; i < nums.length; i++){
        if(nums[i] < nums[i + 1]){
            count++;
        }else if(nums[i] > nums[i + 1] || nums[i + 1] == null || nums[i] == nums[i + 1]){
            if(max <= count){
                max = count + 1;
            }
            count = 0;
        }
    }

    return max;
};