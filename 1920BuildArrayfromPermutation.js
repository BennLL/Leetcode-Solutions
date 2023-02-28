/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // ans = []
    // for(i = 0;i < nums.length; i++){
    //     ans.push(nums[nums[i]]);
    // }

    // return ans;

    ans = []
    index = 0;
    while(index !== nums.length){
        ans.push(nums[nums[index]]);
        index++;
    }

    return ans;
};