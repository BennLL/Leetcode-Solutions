/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    s = s.split("");
    for(i = 0; i < s.length; i++){
        temp = [...s.slice(i, s.length),...s.slice(0,i)];
        if(temp.join("") == goal){return true}
    }

    return false;
};