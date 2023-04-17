/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort(function(a,b){return a-b;})
    
    ans = 0;
    compare = nums[0];
    high = 0;
    count = 0;

    for(i = 0; i < nums.length; i++){
        console.log(compare)
        if(nums[i] == compare){
            count++;
        }
        if(nums[i + 1] != compare){
            compare = nums[i + 1];
            if(count > high){
                high = count;
                count = 0;
                ans = nums[i];
            }
        }
    }

    return ans;
};

console.log("answer: " + majorityElement([2,2,1,1,1,2,2]));

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
