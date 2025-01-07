/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    s = s.split("");
    ans = [];
    temp = s[0];
    max = 2;
    count = 0;

    for(i = 0; i < s.length; i++){
        if(s[i] == temp && count < max){
            ans.push(s[i]);
            count++;
        }
        if(s[i] !== temp){
            temp = s[i];
            ans.push(s[i]);
            count = 1;
        }
        
    }

    return ans.join("")
};