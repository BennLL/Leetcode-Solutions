/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    copy = nums.filter(number => number % 2 == 0);
    if(copy.length == 0){return -1}

    hash = {};
    min = 0;

    for(i = 0; i < copy.length; i++){
        if(hash[copy[i]] !== undefined){
            hash[copy[i]]++;
        }else{
            hash[copy[i]] = 1;
        }
    }

    ans = [];
    for(key in hash){
        if(hash[key] > min){
            min = hash[key];
            ans = [key]
        }else if(hash[key] == min){
            ans.push(key);
        }
    }

    return Math.min(...ans)
};