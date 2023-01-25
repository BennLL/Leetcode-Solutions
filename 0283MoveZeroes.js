/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    pos = 0;
    for(i = nums.length - 1; i > -1; i--){
        if(nums[i] == 0 && nums[i + 1] != 0){
            pos = i;
            while(pos !== nums.length - 1 && (nums[pos + 1] !== 0 || nums[pos + 1] !== null)){
                temp = nums[pos + 1];
                nums[pos] = temp;
                nums[pos + 1] = 0;
                pos++;
            }

        }
    }
    return nums;
};

nums = [0];
console.log(moveZeroes(nums))