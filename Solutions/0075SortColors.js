/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    r = 0;
    w = 0;
    b = 0;
    for(i = 0; i < nums.length; i ++){
        if(nums[i] == 0 ){r++}
        if(nums[i] == 1){w++}
        if(nums[i] == 2){b++}
    }
    i = 0;
    while(r > 0){
        nums[i] = 0;
        i++;
        r--;
    }
    console.log(nums)
    while(w > 0){
        nums[i] = 1;
        i++;
        w--;
    }
    console.log(nums)
    while(b > 0){
        nums[i] = 2;
        i++;
        b--;
    }
    console.log(nums)
};
//can be way better