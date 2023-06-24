/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    s = s.split("");
    ans = [];
    for(i = 0; i < s.length; i++){
        if(s[i] == "*"){
            ans.pop();
        }else{
            ans.push(s[i]);
        }
    }

    return ans.join("");
};