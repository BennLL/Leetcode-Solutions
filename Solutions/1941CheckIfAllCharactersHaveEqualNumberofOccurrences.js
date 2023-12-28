/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    s = s.split("");
    hash = {};
    temp = 0;
    for(i = 0; i < s.length; i++){
        hash[s[i]] !== undefined ? hash[s[i]]++ : hash[s[i]] = 1;
        temp = hash[s[i]];
    }

    for(key in hash){
        if(hash[key] !== temp){
            return false;
        }
    }

    return true;
};