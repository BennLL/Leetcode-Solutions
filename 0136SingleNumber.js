/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    count = 0;
    nums.sort();

    while(count != nums.length){
        if(nums[count] == nums[count + 1]){
            count++;
        }else{
            return nums[count];
        }
        count++;
    }

};

nums = [2,2,1];
console.log(singleNumber(nums));