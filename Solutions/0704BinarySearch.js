/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    left = 0;
    right = nums.length - 1;
    while(left <= right){
        mid = Math.floor((right + left) / 2);
        if(nums[mid] == target){return mid}
        if(nums[mid] > target){right = mid - 1}
        if(nums[mid] < target){left = mid + 1}
    }

    return -1;
};