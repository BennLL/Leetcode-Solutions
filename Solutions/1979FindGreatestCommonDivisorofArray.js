/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort(function(a,b){return a-b})
    i = 1;
    GCD = 1;
    console.log(nums[0], " ", nums[nums.length - 1])
    
    while(i != nums[0] + 1){
        console.log("index: ", i, " GCD: ", GCD);
        if(nums[0] % i == 0 && nums[nums.length - 1] % i == 0){
            GCD = i;
        }
        i++;
    }

    return GCD;
};
// can be improved by a lot