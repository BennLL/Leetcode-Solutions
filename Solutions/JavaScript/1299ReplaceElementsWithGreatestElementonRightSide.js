/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    copy = [...arr].reverse();
    i = 0;
    while(copy.length > 0){
        copy.pop();
        if(copy.length == 0){
            arr[arr.length - 1] = -1;
            break;
        }
        arr[i] = Math.max(...copy);
        i++;
    }

    return arr; 
};