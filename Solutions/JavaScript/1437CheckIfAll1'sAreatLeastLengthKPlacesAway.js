/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    for(i = 0; i < nums.length; i++){
        count = 0;
        if(nums[i] == 1){
            while(count != k){
                count++;
                i++
                if(nums[i] == 1){
                    return false;
                }
            }
        }
    }

    return true;
};
