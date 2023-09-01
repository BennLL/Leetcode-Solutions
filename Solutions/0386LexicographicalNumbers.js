/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    ans = [];
    for(i = 0;i < n; i++){
        ans.push(i + 1);
    }

    return ans.sort();
};