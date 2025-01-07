/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    hash = {};
    for(i = 0; i < nums.length; i++){
        if(hash[nums[i]] !== undefined){
            hash[nums[i]]++;
        }else{
            hash[nums[i]] = 1;
        }
    }

    arr = Object.entries(hash);
    arr.sort((a,b) => b[1] - a[1]);
    arr = arr.map(([key, value]) => key);
    return arr.splice(0, k)
};