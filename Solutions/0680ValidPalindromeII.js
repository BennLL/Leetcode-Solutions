/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    scopy = s.split("").reverse().join("");

    for(i = 0; i < s.length; i++){
        tempstring = s.substring(0, i) + s.substring(i + 1, s.length);
        backwards = scopy.substring(0, s.length - i - 1) + scopy.substring(s.length - i, s.length)
        if(tempstring == backwards){
            return true;
        }

    }
    return false;
};

// Can be improved by a lot