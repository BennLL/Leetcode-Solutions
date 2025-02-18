/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let last = nums[0];
    let count = 1;
    for(i = 1; i < nums.length; i++){
        if(nums[i] != last){
            if(count >= 1){
                count--;
            }else if(count == 0){
                last = nums[i];
                count = 1;
            }
        }else{
            count++;
        }
    }

    return last;
};

//updated