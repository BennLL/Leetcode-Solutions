/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split("")
    copy = [...s];
    count = 0;
    while(copy.length > 0){
        while(!isEnglishLetter(s[count])){
            count++;
        }
        while(!isEnglishLetter(copy[copy.length - 1])){
            copy.pop();
        }
        s[count] = copy.pop();
        count++;
    }

    return s.join("");
};

function isEnglishLetter(char) {
    return /[A-Za-z]/.test(char);
}