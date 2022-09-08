var twoSum = function(nums, target) {
    for (x = 0; x < nums.length; x++) 
    {
        for (y = x + 1; y < nums.length; y++) 
        {   
            if ((nums[x] + nums[y]) == target) 
            {
                var arr = [x, y]
                return arr;
            }
        }
    }
    return null
};