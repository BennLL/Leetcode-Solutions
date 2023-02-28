/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    score.sort(function(a,b){
        if(a[k] === b[k]){
            return;
        }else{
            return(b[k] - a[k]);
        }
    })

    return score;
};