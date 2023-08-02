/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    ans = [];
    for(i = 0; i < numRows; i++){
        ans[i] = [];
        ans[i][0] = 1;
        for(x = 1; x < i; x++){
            ans[i][x] = ans[i - 1][x - 1] + ans[i - 1][x];
        }
        ans[i][i] = 1;
    }

    return ans;
};
