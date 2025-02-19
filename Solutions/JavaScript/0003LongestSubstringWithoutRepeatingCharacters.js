/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let max = 0;
    let set = new Set();
    for(i = 0; i < s.length; i++){
        while(set.has(s[i])){
            set.delete(s[l]);
            l++;
        }
        set.add(s[i]);
        max = Math.max(max, i - l + 1);
    }

    return max;
};