/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    high = Math.max(...nums);
    index = nums.indexOf(high);
    for(i = 0; i < nums.length; i++){
        if(nums[i] > (high / 2) && i != index){
            return -1;
        }
    }

    return index;
};