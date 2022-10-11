/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function(a,b){return a-b});
    count = 0;
    for(i = 0; i < nums.length + 1; i++){
        if(nums[i] != count){
            return count;
        }
        count++;
    }
};

nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
console.log(missingNumber(nums));


// nums.length represents the range
// [0] returns 1
// [1] returns 0
// [1, 2] returns 0
// [0, 1] returns 2
//[45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14] returns 18