/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    for(i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            i++
        }else{return nums[i];}
    }
};


//using xor
var singleNonDuplicate = function(nums) {
    result = 0;
    for(i = 0; i < nums.length; i++){
        result ^= nums[i];
    }

    return result
};