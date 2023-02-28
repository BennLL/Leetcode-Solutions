/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    less = [];
    great = [];
    piv = []
    for(i = 0; i < nums.length; i++){
        if(nums[i] < pivot){
            less.push(nums[i]);
        }else if(nums[i] == pivot){
            piv.push(nums[i]);
        }else if(nums[i] > pivot){
            great.push(nums[i]);
        }
    }

    return[...less,...piv,...great]
};