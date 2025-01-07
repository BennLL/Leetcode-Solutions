/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    arr = arr.sort(function(a,b){
        A = Math.abs(a - x);
        B = Math.abs(b - x);

        return A - B;
    })

    arr = arr.splice(0,k).sort(function(a,b){return a - b})
    return arr;
};