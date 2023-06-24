/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var numset = new Set();
    x = 0;
    for(i = 0; i < nums.length; i++){
        numset.add(nums[i]);
    }

  
    numset.forEach(element => {
        nums[x] = element;
        x++;
    });

    console.log(nums);
    return numset.size;
};

var nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));