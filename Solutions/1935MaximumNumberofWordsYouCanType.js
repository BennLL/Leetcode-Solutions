/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(" ");
    brokenLetters = brokenLetters.split("");
    count = text.length;
    for(i = 0; i < text.length; i++){
        temp = text[i].split("");
        for(y = 0; y < brokenLetters.length; y++){
            if(temp.includes(brokenLetters[y])){
                count--;
                break;
            }
        }
    }
    return count;
};