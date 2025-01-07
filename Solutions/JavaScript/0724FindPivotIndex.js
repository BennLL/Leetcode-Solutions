/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    right = nums.reduce((total, curr) => total + curr, 0);
    left = 0;

    for(i = 0; i < nums.length; i++){
        left += nums[i];
        right -= nums[i];
        console.log("left:", left, " right:", right)
        if(left == right){
            return i;
        }
    }

    return -1;
};