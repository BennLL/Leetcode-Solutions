/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};

  for(i = 0; i < nums.length; i++) {
    if(hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};
// array solution 
// var twoSum = function(nums, target) {
//     for (x = 0; x < nums.length; x++) 
//     {
//         for (y = x + 1; y < nums.length; y++) 
//         {   
//             if ((nums[x] + nums[y]) == target) 
//             {
//                 var arr = [x, y]
//                 return arr;
//             }
//         }
//     }
//     return null
// };
//completed