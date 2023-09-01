/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    max = Math.floor(nums.length / 3);
    console.log(max)
    nums = nums.sort(function(a,b){return a - b;});
    ans = [];

    count = 0;
    temp = nums[0];

    for(i = 0; i <= nums.length; i++){
        if(nums[i] == temp){
            count++;
        }
        if(nums[i] !== temp){
            if(count > max){ans.push(temp)}
            temp = nums[i];
            count = 1;
        }
    }

    return ans;
};