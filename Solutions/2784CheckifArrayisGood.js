/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums = nums.sort(function(a,b){return a-b;})

    for(i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1] && nums[i + 1] + 1 != nums.length){
            return false;
        }
    }

    return (nums[nums.length - 1] == nums[nums.length - 2] && (nums[nums.length - 1] != nums[nums.length - 3]));
};