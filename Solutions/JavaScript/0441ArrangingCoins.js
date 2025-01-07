/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    inc = 1;
    count = 0;
    while(n >= 0){
        n -= inc;
        inc++;
        count++;
    }

    return count - 1;
};