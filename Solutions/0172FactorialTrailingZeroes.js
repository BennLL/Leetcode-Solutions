/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    count = 0;
    for(i = 5; i <= n; i *= 5){
        count += Math.floor(n/i);
    }
    return count;
};