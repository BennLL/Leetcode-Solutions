/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    stat = false;
    index = 0;
    while(stat == false){
        if(haystack.substring(index, index + needle.length) == needle){
            return index;
        }
        index++;
        if(index >= haystack.length){
            break;
        }
    }

    return -1;
};