/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    rev = Math.abs(x).toString().split("").reverse().join("");
    if(rev > 2**31){
        return 0;
    }
    if(x < 0){
        rev *= -1;
    }

    return rev;
};