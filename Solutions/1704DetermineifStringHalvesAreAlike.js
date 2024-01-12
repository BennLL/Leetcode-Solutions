/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    start = s.substring(0, (s.length / 2))
    end = s.substring((s.length / 2), s.length)
    count1 = 0;
    count2 = 0;

    for(i = 0; i < start.length; i++){
        if(vowels.has(start[i])){count1++}
        if(vowels.has(end[i])){count2++}
    }

    return count1 == count2;
};