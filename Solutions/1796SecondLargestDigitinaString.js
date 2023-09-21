/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    s = s.split("").filter(item => typeof item === 'number' || (typeof item === 'string' && !isNaN(item))).sort(function(a,b){return b - a});
    console.log(s)
    temp = s[0]
    for(i = 0; i < s.length; i++){
        if(s[i] < temp){
            return s[i];
        }
    }

    return -1;
};
// can be faster