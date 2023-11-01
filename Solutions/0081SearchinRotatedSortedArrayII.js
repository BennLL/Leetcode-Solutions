/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// var search = function(nums, target) {
//     for(i = 0; i < nums.length; i++){
//         if(nums[i] == target){return true}
//     }

//     return false;
// };
// simple for loop

var search = function(nums, target) {
    nums = nums.sort(function(a,b){return a-b});
    l = 0;
    r = nums.length - 1;
    while(l <= r){
        mid = Math.floor((l + r) / 2);

        if(nums[mid] == target){
            return true;
        }

        if(nums[l] == nums[mid] && nums[r] == nums[mid]){
            l++;
            r--;
        }else if(nums[l] <= nums[mid]){
            if(nums[l] <= target && target < nums[mid]){
                r = mid - 1;
            }else{
                l = mid + 1;
            }
        }else{
            if(nums[mid] < target && target <= nums[r]){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }
    }

    return false;
};
//binary search