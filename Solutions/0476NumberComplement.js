/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt(num.toString(2).replace(/[01]/g,(match) => (match === '0' ? '1' : '0')),2);
};
// one liner solution

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    bits = num.toString(2);
    inverted = '';

    for(i = 0; i < bits.length; i++){
        inverted += bits[i] == '0' ? '1' : '0';
    }

    return parseInt(inverted, 2);
};

//for loop solution