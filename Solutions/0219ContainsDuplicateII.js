/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    dict = new Map();
    for(i = 0; i < nums.length; i++){
        if(dict.has(nums[i]) && Math.abs(dict.get(nums[i]) - i) <= k){
            return true;
        }
        dict.set(nums[i], i)
    }

    return false;
};