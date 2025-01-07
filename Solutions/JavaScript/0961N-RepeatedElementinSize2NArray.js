/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    size = nums.length / 2;
    nums.sort(function(a,b){return a - b});
    for(i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + size - 1]){
            return nums[i];
        }
    }

    return 0;
};