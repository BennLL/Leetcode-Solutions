
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     for(i = 0; i < nums.length; i++){
//         nums[i] *= nums[i];
//     }
//     nums.sort(function(a,b){return a - b});
//     return nums;
// };

var sortedSquares = function(nums) {
    ans = [];
    left = 0; right = nums.length - 1;

    while(left <= right){
        if(nums[left] ** 2 > nums[right] ** 2){
            ans.push(nums[left] ** 2);
            left++;
        }else{
            ans.push(nums[right] ** 2);
            right--;
        }
    }

    return ans.reverse();
};