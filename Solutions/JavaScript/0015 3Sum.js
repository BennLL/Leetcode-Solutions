/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort(function (a, b){ return a - b });
    let ans = [];

    for (let start = 0; start < nums.length; start++) {
        if(start > 0 && nums[start] == nums[start - 1]){
            continue;
        }
        
        //console.log("iteration", start)
        let mid = start + 1;
        let end = nums.length - 1;
        while(mid < end){
            //console.log(nums[start], nums[mid], nums[end], "=", nums[start] + nums[mid] + nums[end] );
            let temp = nums[start] + nums[mid] + nums[end];
            if(temp > 0){
                end--;
            }else if(temp < 0){
                mid++;
            }else{
                ans.push([nums[start], nums[mid], nums[end]]);
                mid++;

                while(nums[mid] === nums[mid - 1] && mid < end){
                    mid++;
                }
            }
        }
    }

    return ans;
};