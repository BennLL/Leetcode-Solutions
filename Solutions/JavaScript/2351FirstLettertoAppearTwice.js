/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    s = s.split("");
    newArr = [];
    for(i = 0; i < s.length; i++){
        if(!newArr.includes(s[i])){
            newArr.push(s[i]);
        }else{
            return s[i];
        }
    }
};