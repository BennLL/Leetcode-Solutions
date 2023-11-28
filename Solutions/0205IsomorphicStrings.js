/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    hashS = {};
    hashT = {};
    for(i = 0; i < s.length; i++){
        if(hashS[s[i]] !== undefined || hashT[t[i]] !== undefined){
            if(hashS[s[i]] !== t[i] || hashT[t[i]] !== s[i]){
                return false;
            }
        }else{
            hashS[s[i]] = t[i];
            hashT[t[i]] = s[i];
        }
    }

    return true;
};