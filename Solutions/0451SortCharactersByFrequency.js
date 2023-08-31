/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    s = s.split("");
    s = s.sort();
    console.log(s);

    temp = s[0];
    ans = [];
    str = "";
    for(i = 0; i < s.length + 1; i++){
        if(s[i] == temp){
            str += s[i];
        }
        if(s[i] !== temp){
            ans.push(str);
            str = "";
            str += s[i];
            temp = s[i];
        }
    }

    ans = ans.sort(function(a,b){return b.length - a.length})
    return ans.join("");
};