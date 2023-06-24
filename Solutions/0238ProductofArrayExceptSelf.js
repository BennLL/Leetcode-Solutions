/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    index = 0;
    var result = new Array();
    while(index != nums.length){
        temp = nums[index]
        temp2 = nums[0];
        nums[index] = temp2;
        nums[0] = temp;

        tempresult = 1;
        for(i = 1; i < nums.length; i++){
            tempresult *= nums[i];
        }
        result.push(tempresult);

        index++;
    }

    return result;
};

nums = [-1,1,0,-3,3];
console.log(productExceptSelf(nums));


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]