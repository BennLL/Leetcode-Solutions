/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if(s.length === 0){return 0}
    copy = s.split("").reverse().join("");
    return copy === s ? 1 : 2;
};