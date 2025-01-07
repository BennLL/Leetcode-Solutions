/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    result = 0;

    if(target > nums[nums.length - 1]){
        return nums.length;
    }
    if(target < nums[0]){
        return 0;
    }

    for(i = 0; i < nums.length; i++){
        
        if(target > nums[i] && target < nums[i + 1]){
            result = i + 1;
        }
        
        if(nums[i] == target){
            return i;
        }
    }
    return result

};


nums = [1,3];
target = 3;
console.log(searchInsert(nums, target));