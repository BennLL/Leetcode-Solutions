/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    even = 0;
    odd = 1;
    ans = [];
    for(i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            ans[even] = nums[i];
            even += 2;
        }else{
            ans[odd] = nums[i];
            odd += 2;
        }
    }

    return ans;
};
// one loop method

var sortArrayByParityII = function(nums) {
    even = nums.filter((num) => num % 2 == 0);
    odd = nums.filter((num) => num % 2 != 0);
    ans = [];

    for(i = 0; i < nums.length / 2; i++){
        ans.push(even[i], odd[i]);
    }

    return ans;
};
//filter method