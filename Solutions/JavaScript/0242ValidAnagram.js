/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){return false}

    hashS = {}
    hashT = {}

    for(i = 0; i < s.length; i++){
        hashS[s[i]] !== undefined ? hashS[s[i]]++ : hashS[s[i]] = 1;
        hashT[t[i]] !== undefined ? hashT[t[i]]++ : hashT[t[i]] = 1;
    }
    for(key in hashS){
        if(hashS[key] !== hashT[key]){return false;}
    }
    return true
};