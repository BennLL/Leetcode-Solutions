/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
    copy = [...nums].sort(function(a,b){return a - b;}).join("");
    console.log(typeof copy, copy);
    count = 0;
    while(count <= nums.length){
        if(nums.join("") == copy){return count};
        nums.unshift(nums.pop());
        count++;
    }

    return -1;
}