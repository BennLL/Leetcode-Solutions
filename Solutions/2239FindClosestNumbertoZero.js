/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    if(nums.length == 1){return nums[0]}

    nums = nums.sort(function(a,b){
        if (Math.abs(a) === Math.abs(b)) {
            return b - a;
        } 
        return Math.abs(a) - Math.abs(b)
    })
    console.log(nums);

    return nums[0];

};

// can be faster