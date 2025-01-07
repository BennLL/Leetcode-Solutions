/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(i = 0; i < arr.length; i++){
        if((arr[i] % 2 != 0) && (arr[i+1] % 2 != 0) && (arr[i+2] % 2 != 0) && (arr[i+2] != null)){
            return true;
        }
    }

    return false;
};