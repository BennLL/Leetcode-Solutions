/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort(function(a,b){return a[0] - b[0]});
    ans = [];
    for(i = 1; i < intervals.length; i++){
        curr = intervals[i];
        prev = intervals[i - 1];
        if(curr[0] <= prev [1]){
           intervals[i] = [Math.min(prev[0], curr[0]), Math.max(curr[1], prev[1])];
           intervals.splice(i - 1, 1);
           i--;           
        }
    }

    return intervals
};