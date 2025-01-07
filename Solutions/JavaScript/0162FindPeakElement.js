/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    l = 0;
    r = nums.length - 1;
    mid = 0;
    while(l < r){
        mid = Math.floor((r + l) / 2);
        if(nums[mid] > nums[mid + 1]){
            r = mid;
        }else{l = mid + 1;}
    }

    return l;
};

//o(n) solution:
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function(nums) {
//     return nums.indexOf(Math.max(...nums));
// };