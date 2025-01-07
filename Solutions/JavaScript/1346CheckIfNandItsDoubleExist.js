/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(i = 0; i < arr.length; i++){
        temp = arr.indexOf(arr[i] * 2);
        if(i != temp && temp < arr.length && temp !== -1){
            return true;
        }
    }
    return false;
};