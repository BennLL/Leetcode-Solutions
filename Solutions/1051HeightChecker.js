/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    copy = [...heights]
    copy = copy.sort(function(a,b){return a - b});
    ans = 0;
    for(i = 0; i < heights.length; i++){
        if(copy[i] !== heights[i]){ans++;}
    }
    return ans;
};

