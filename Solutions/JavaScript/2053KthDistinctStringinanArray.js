/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    hash = {};
    for(i = 0; i < arr.length; i++){
        if(hash[arr[i]] !== undefined){
            hash[arr[i]]++;
        }else{hash[arr[i]] = 1}
    }

    count = 0;
    for(key in hash){
        if(hash[key] == 1){count++;}
        if(hash[key] == 1 && count == k){return key}
    }

    return ""
};