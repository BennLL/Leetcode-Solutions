/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    seenB = false;
    for(i = 0; i < s.length; i++){
        if(s[i] == 'b'){
            seenB = true;
        }
        if(s[i] == 'a' && seenB == true){
            return false;
        }
    }

    return true;
};