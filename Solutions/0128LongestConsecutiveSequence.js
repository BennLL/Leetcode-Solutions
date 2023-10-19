/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length){return 0;}
    nums = Array.from(new Set(nums));
    nums = nums.sort(function(a,b){return a-b});

    curr = nums[0];
    count = 1;
    max = 1;

    for(i = 1; i < nums.length; i++){
        if(nums[i] == curr + 1){
            count++;
        }else{
            max = Math.max(count, max)
            count = 1;
        }
        curr = nums[i];
    }

    return Math.max(count, max);
};