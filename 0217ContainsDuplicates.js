/**
 * @param {number[]} nums
 * @return {boolean}
 */

// var containsDuplicate = function(nums) {
//     var tempset = new Set();

//     for(i = 0; i < nums.length; i ++){
//         tempset.add(nums[i]);
//     }

//     return tempset.size < nums.length;
// };

//while loop?

var containsDuplicate = function(nums) {
    var tempset = new Set();
    count = 0;
    while(count != nums.length){
        tempset.add(nums[count]);
        count++;
    }

    return tempset.size < nums.length;
};

nums = [1,10,3,4,56,4];
console.log(containsDuplicate(nums));

