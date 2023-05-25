/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    A = BigInt("0b" + a);
    B = BigInt("0b" + b);  //0b tells BigInt that b is a binary
    return (A + B).toString(2);
    //toString(2) will convert the result into binary base of 2
};