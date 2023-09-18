/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    s = s.split("");
    temp = "";
    max = 0;
    count = 0;

    for(i = 0; i <= s.length; i++){
        if(s[i] == temp){
            count++;
        }
        if(s[i] !== temp){
            temp = s[i];
            if(count > max){max = count}
            count = 1;
        }
    }

    return max;
};