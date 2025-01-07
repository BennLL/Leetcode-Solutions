/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    map = new Map();
    for(i = 0; i < numbers.length; i++){
        if(map.get(target - numbers[i]) !== undefined){
            return [map.get(target - numbers[i]) + 1, i + 1]
        }
        map.set(numbers[i], i);
    }
    return;
};