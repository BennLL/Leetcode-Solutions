/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    return n.toString(k).split("").map(Number).reduce((a,b) => a + b, 0)
}