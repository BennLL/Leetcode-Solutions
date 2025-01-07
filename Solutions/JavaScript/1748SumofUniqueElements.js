/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    hash = {};

    for(i = 0; i < nums.length; i++){
        if(hash[nums[i]] !== undefined ){
            hash[nums[i]]++;
        }else{hash[nums[i]] = 1}
    }
    
    sum = 0;

    for(key in hash){
        if(hash[key] == 1){sum += parseInt(key)}
    }

    return sum;
};