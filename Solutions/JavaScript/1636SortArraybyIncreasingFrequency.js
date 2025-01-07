/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    hash = {};
    for(i = 0; i < nums.length + 1; i++){
        if(hash[nums[i]] !== undefined){
            hash[nums[i]]++;
        }else{
            hash[nums[i]] = 1;
        }
    }

    return nums.sort(function(a,b){
        if(hash[a] - hash[b] == 0){
            return b - a;
        }
        return hash[a] - hash[b];
    })
};