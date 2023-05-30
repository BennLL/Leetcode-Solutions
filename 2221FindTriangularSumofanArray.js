/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {

    while(nums.length > 0){
        if(nums.length == 1){
            return nums[0];
        }

        for(i = 0; i < nums.length; i++){
            if(nums[i+1] != null){
                nums[i] = (nums[i] + nums[i+1]) % 10;
            }
        }

        nums.pop();

    }

    return 0;
};