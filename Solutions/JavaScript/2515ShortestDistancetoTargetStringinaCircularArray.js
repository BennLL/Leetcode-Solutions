/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    if(words.indexOf(target) == -1){
        return -1;
    }

    found = false;
    l = startIndex;
    r = startIndex;
    count = 0;
    while(found == false){
        if(words[l] == target || words[r] == target){
            return count;
        }
        l--;
        r++;
        count++;
        if(l < 0){
            l = words.length - 1;
        }
        if(r > words.length - 1){
            r = 0;
        }
    }
};