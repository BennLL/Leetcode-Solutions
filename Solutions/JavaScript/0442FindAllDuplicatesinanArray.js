/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Set.has() has time complexity of O(1)
var findDuplicates = function(nums) {
    record = new Set();
    ans = [];
    for(i = 0; i < nums.length; i++){
        if(!record.has(nums[i])){
            record.add(nums[i]);
        }else{
            ans.push(nums[i]);
        }
    }

    return ans;
};

// O(n ^ 2) Solution below since includes method is O(n)
// var findDuplicates = function(nums) {
//     record = [];
//     ans = [];
//     for(i = 0; i < nums.length; i++){
//         if(!record.includes(nums[i])){
//             record.push(nums[i]);
//         }else{
//             ans.push(nums[i]);
//         }

//     }
//     return ans;
// };