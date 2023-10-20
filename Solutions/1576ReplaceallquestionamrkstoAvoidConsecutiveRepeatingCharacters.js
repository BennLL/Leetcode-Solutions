/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    s = s.split("");
    set = new Set(s);

    for(i = 0; i < s.length; i++){
        if(s[i] == "?"){
            for(x = 0; x < alphabets.length; x++){
                if(!set.has(alphabets[x]) && s[i - 1] != alphabets[x] && s[i + 1] != alphabets[x]){
                    s[i] = alphabets[x];
                    break;
                }
            }
        }
    }
    
    return s.join("")
};