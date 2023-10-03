/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    word1 = word1.split("").reverse();
    word2 = word2.split("").reverse();

    ans = [];
    while(word1.length && word2.length){
        ans.push(word1.pop());
        ans.push(word2.pop());
    }

    if(word1.length){
        ans = [...ans, ...word1.reverse()];
    }else{
        if(word2.length){
            ans = [...ans, ...word2.reverse()];
        }
    }

    return ans.join("");
};

// can be faster