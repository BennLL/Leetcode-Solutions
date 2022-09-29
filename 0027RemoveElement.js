/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     count = 0;
//     for(x = 0; x < nums.length; x ++){
//         if(nums[x] == val){
//             nums[x] = "_";
//             count++;
//         }
//     }
//     nums.sort();
//     console.log(nums);
//     return nums.length - count;
// };


//while loop solution
var removeElement = function(nums, val) {
    count = 0;
    temp = 0;
    while(count != nums.length){
        if(nums[count] == val){
            nums[count] = "_";
            temp++;
        }
        count++;
    }

    nums.sort();
    console.log(nums);
    return nums.length - temp;
};

val = 2;
nums = [0,1,2,2,3,0,4,2];
console.log(removeElement(nums, val));