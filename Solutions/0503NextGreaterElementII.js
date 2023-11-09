/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    double = [...nums,...nums];
    for(i = 0; i < nums.length; i++){
        condition = false;

        for(x = i; x < double.length; x++){
            if(double[x] > nums[i]){
                nums[i] = double[x];
                condition = true;
                break
            }
        }

        if(condition == false){nums[i] = -1}
    }

    return nums;
};
// can be faster