/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split("").reverse();
    t = t.split("")
    for(i = 0; i < t.length; i++){
        if(s[s.length - 1] == t[i]){
            s.pop();
        }
    }

    return s.length === 0;
};