/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    set = new Set([...nums]);
    count = 1;
    ans = [];
    for(i = 0; i < nums.length; i++){
        if(!set.has(count)){
            ans.push(count);
        }
        count++;
    }

    return ans;
};