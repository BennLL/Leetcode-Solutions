/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map = {};
    s = s.split("");
    max = -1;
    
    for(i = 0; i < s.length; i++){
        if(map[s[i]] !== undefined){
            max = Math.max(i - map[s[i]] - 1, max );
        }else{
            map[s[i]] = i;
        }
    }

    return max;
};