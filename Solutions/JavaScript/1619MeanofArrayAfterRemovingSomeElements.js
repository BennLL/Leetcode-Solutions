/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort(function(a,b){return a - b;})

    total = 0;
    trim = arr.length * 0.05;

    for(i = trim; i < arr.length - trim; i++){
        total += (arr[i]);
    }

    return total / (arr.length - (trim * 2));
};