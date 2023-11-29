/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length < 2){return true}

    dir = 0;
    for(i = 0; i < nums.length; i++){
        if(nums[i + 1] > nums[i]){
            if(dir == 0){
                dir = 1
            }else if(dir == -1){return false}
        }else if(nums[i + 1] < nums[i]){
            if(dir == 0){
                dir = -1
            }else if(dir == 1){return false}
        }
    }

    return true;
};