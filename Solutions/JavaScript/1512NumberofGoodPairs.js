/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    hash = {};
    ans = 0;

    for(i = 0; i < nums.length; i++){
        if(hash[nums[i]] !== undefined){
            ans += hash[nums[i]];
            hash[nums[i]]++;
        }else{hash[nums[i]] = 1}
    }

    return ans;
};