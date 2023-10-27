/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = /^[qwertyuiop]*$/i;
    const row2 = /^[asdfghjkl]*$/i;
    const row3 = /^[zxcvbnm]*$/i;
    ans = [];

    for (i = 0; i < words.length; i++) {
        if (row1.test(words[i]) || row2.test(words[i]) || row3.test(words[i])) {
            ans.push(words[i]);
        }
    }

    return ans;
};