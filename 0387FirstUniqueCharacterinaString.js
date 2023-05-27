/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    s = s.split("");
    for(i = 0; i < s.length; i++){
        if((s.indexOf(s[i], i + 1) == -1) && (s.indexOf(s[i]) >= i)){
            return i;
        }
    }
    return -1;
};