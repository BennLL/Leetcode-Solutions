/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.includes(target)){
        return [-1, -1];
    }

    start = nums.indexOf(target);
    count = 0;

    stat = true;
    while(stat){
        if(nums[start + count] == target){
            count++;
        }else{
            break;
        }
    }

    return [start, start + count - 1]

};