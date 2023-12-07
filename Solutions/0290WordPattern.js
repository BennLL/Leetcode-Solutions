/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(p, s) {
    hashP = {};
    hashS = {};
    s = s.split(" ");
    console.log(s, "\n")
    if(p.length !== s.length){return false}

    for(i = 0; i < p.length; i++){
        if(s[i] == 'constructor'){s[i] += "_"} //  constructor is a reserved word in js so we add a "_" behind it
        if(hashP[p[i]] !== undefined || hashS[s[i]] !== undefined){
            if(hashP[p[i]] !== s[i] || hashS[s[i]] !== p[i]){
                return false
            }
        }else{
            hashP[p[i]] = s[i];
            hashS[s[i]] = p[i];
        }
    }
    return true; 
};