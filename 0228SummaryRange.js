/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    newArr = [];
    tempString = "";
    start = 0;
    end = 0;
    condition = false;
    for(i = 0; i < nums.length; i++){
        if(nums[i] + 1 !== nums[i+1] && condition == false){
            tempString += nums[i];
            newArr.push(tempString);
            tempString = "";
        }
        if(nums[i] + 1 == nums[i+1] && condition == false){
            start = i;
            condition = true;
        }
        if(nums[i] + 1 !== nums[i+1] && condition == true){
            condition = false;
            end = i;
            tempString += nums[start] + "->" + nums[end];
            newArr.push(tempString);
            tempString = "";
        }

    }
    
    return newArr;
};