/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    set = new Set(jewels.split(""));
    stones = stones.split("");
    return stones.filter(element => set.has(element)).length;
};