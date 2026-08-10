/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let tempSet = new Set(nums);
    let newNums = Array.from(tempSet)
    let max = 0;
    for(let i = 0; i < newNums.length; i++){
        let count = 1;
        if(!tempSet.has(newNums[i] - 1)){
            let tempNum = newNums[i];
            while(tempSet.has(tempNum + 1)){
                count++;
                tempNum++;
            }
        }
        max = Math.max(max, count);
    }

    return max;
};

console.log(longestConsecutive([100,4,200,1,3,2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([1,0,1,2]))// 3