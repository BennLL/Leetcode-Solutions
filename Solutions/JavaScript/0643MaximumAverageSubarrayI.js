/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0;
    for(let i = 0; i < nums.length - k + 1; i++){
        let temp = 0;
        for(x = i; x < k + i; x++){
            temp += nums[x];
            console.log(nums[x]);
        }
        console.log("total:", temp);
        console.log(temp/k)
        max = Math.max(max, temp / k);
    }

    return max;
};

console.log(findMaxAverage([-1], 1)); // 12.75

// Brute force method ^

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    let temp = 0;
    for(let i = 0; i < k; i++){
        temp += nums[i];
    }

    for(let i = k - 1; i < nums.length ; i++){
        max = Math.max(max, temp);
        temp -= nums[i - k + 1];
        temp += nums[i + 1];
    }

    return max / k;
};

// O(n) method ^

