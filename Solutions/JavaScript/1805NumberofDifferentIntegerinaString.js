/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    word = word.split(/\D+/);
    ans = new Set();
    for(i = 0; i < word.length; i++){
        num = parseInt(word[i]);
        if( (!ans.has(num) && !ans.has(word[i])) && !isNaN(num)){
            if(num === Infinity){
                ans.add(word[i]);
            }else{ans.add(num);}
        }
    }

    return ans.size;
};