/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums= Array.from(new Set(nums))
    nums = nums.sort(function(a,b){return a - b;});

    count = 1;
    for(i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            if(nums[i] == count){
                count++;
            }else{
                return count;
            }
        }
    }

    return count;
};