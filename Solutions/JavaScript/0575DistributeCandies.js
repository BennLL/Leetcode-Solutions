/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    set = new Set(candyType)
    half = candyType.length / 2
    return set.size <= half ? set.size : half
};