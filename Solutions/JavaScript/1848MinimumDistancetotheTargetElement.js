/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    back = -10000
    front = -10000
    for(i = start; i < nums.length; i++){
        if(nums[i] == target){
            back = i;
            break;
        }
    }
    for(i = start; i >= 0; i--){
        if(nums[i] == target){
            front = i;
            break;
        }
    }
    console.log(Math.abs(start - back)) 
    console.log(Math.abs(start - front))
    return Math.min(Math.abs(start - back), Math.abs(start - front));
};