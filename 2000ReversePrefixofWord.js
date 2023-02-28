/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    i = word.indexOf(ch);
    if(i === -1){
        return word;
    }
    first = word.substring(0, i + 1);
    first = first.split("").reverse().join("");
    second = word.substring(i + 1, word.length)

    return first += second;
};