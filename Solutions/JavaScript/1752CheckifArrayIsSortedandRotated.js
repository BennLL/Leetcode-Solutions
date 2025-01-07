/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    copy = [...nums].sort(function(a,b){return a - b});
    str = [...nums].join(",");
    for(i = 0; i < nums.length; i++){
        temp = copy.join(",")
        if(temp === str){return true; }
        copy.unshift(copy.pop());
    }

    return false
};