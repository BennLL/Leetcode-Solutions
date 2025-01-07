/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    
    count = Math.floor((high - low) / 2);

    return (low % 2 != 0 || high % 2 != 0) ? (count + 1) : count
}