/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    copy = num;
    copy = copy.toString();
    copy = copy.split("").reverse().join("");
    size = copy.length;
    copy = parseInt(copy);
    copy = copy.toString();
    if(copy.length != size){
        return false
    }
    return true
};