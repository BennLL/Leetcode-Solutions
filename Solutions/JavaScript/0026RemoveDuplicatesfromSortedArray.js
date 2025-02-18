/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    num = new Set();
    count = 0;
    for(i = 0; i < nums.length; i++){
        if(!num.has(nums[i])){
            num.add(nums[i]);
            count++;
        }else{
            nums[i] = "_";
        }
    }
    nums = nums.sort(function(a,b){
        if(typeof a === 'number' && typeof b !== "number"){return -1};
        if(typeof a !== 'number' && typeof b === "number"){return 1};
        if(typeof a === 'number' && typeof b === "number"){return a-b};
        return 0;
    });
    console.log(nums);
    return count;
};

//updated solution