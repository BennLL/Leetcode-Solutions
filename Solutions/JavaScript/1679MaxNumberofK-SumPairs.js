/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let hash = {};
    let count = 0;
    for(i = 0; i < nums.length; i++){
        let temp = k - nums[i];
        if(hash[temp] !== undefined){
            count++;
            hash[temp]--;
            if(hash[temp] == 0){
                delete hash[temp];
            }
        }else{
            hash[nums[i]] = (hash[nums[i]] || 0) + 1;
        }
    }

    return count;
};