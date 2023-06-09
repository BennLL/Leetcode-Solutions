/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    curr = nums[0];
    count = 0;

    for(i = 1; i < nums.length; i++){
        if(nums[i] == curr && count < 2){
            count++;
        }
        if(nums[i] !== curr){
            curr = nums[i];
            count = 0;
        }
        if(nums[i] == curr && count >=2){
            nums[i] = '_';
        }
    }
    nums = nums.sort((a, b) => (typeof b === "number") - (typeof a === "number") || a - b);
    // console.log(nums);

    result = nums.indexOf('_');
    
    if(result == -1){
        return nums.length;
    }
    
    return result;
};