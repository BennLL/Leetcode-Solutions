/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
    return s;
};

s = ["h","e","l","l","o"];
console.log(reverseString(s));