/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    bits = n.toString(2);
    alt = bits[0];

    for(i = 1; i <= bits.length; i++){
        if(bits[i] == alt){
            return false;
        }
        alt = bits[i];
    }

    return true;
};