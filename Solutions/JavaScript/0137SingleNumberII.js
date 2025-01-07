/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    hash = {};
    for(i = 0; i < nums.length; i++){
        if(hash[nums[i]] !== undefined){
            hash[nums[i]]++;
        }else{hash[nums[i]] = 1};
    }

    for(key in hash){
        if(hash[key] == 1){ return key}
    }
};
// linear time but not constant space solution^^


var singleNumber = function(nums) {
    let ones = 0
    let twos = 0

    for(num of nums){
        ones = ~twos & (ones ^ num);
        twos = ~ones & (twos ^ num);
    }

    return ones;
};
//bitwise solution
