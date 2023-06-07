/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    max = 0;
    nums = nums.join("").split(0);
    for(i = 0; i < nums.length; i++){
        if(nums[i].length > max){
            max = nums[i].length;
        }
    }
    return max;
};

// with sort function
// var findMaxConsecutiveOnes = function(nums) {
//     max = 0;
//     nums = nums.join("").split(0);
//     nums.sort(function(a,b){return b.length - a.length});
//     return nums[0].length;
// };