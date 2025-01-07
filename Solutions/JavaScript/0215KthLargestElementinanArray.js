/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//     nums = nums.sort(function(a,b){return b - a;});
//     return (nums[k - 1])
// };
// with sorting

var findKthLargest = function(nums, k) {
    max = Math.max(...nums);

    hash = {};
    for(i = 0; i < nums.length; i++){
        hash[max - nums[i]] = (hash[max - nums[i]] || 0) + 1;
    } // finds the frequency of each difference(max - nums[i])

    count = 0;
    diff = 0;
    while(count < k){
        count += (hash[diff] || 0);
        diff++;
    } // go through each difference til it reaches K

    return max - diff + 1;
};

[3,2,3,1,2,4,5,5,6], k = 4, answer = 4;

// max = 6
// hash:
// 3: 2
// 4: 2
// 5: 1
// 2: 1
// 1: 2
// 0: 1

// count = 0;
// diff = 0;
// while count < 4:
// count = 0 -> 1 -> 3 -> 4
// diff = 0 -> 1 -> 2 -> 3

// return max - diff + 1
//         6  -  3   + 1 = 4


