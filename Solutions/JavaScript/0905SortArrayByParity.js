/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    nums.sort(function(a,b){
        if(a % 2 == 0 && b % 2 != 0){ return -1}
        else if(a % 2 != 0 && b % 2 == 0){return 1}
        else{return 0}
    })

    return nums
};

//for loop solution below
var sortArrayByParity = function(nums) {
    even = [];
    odd = [];
    for(i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            even.push(nums[i]);
        }else{
            odd.push(nums[i]);
        }
    }
    
    return [...even,...odd];
};