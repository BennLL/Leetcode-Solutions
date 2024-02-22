/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    hash = {}
    for(i = 0; i < nums.length; i++){
        temp = nums[i] + nums[i + 1];
        if(hash[temp] !== undefined){
            return true;
        }else{hash[temp] = i}
    }
    return false;
};