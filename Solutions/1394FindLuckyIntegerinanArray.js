/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    arr = arr.sort(function(a,b){ return a - b;});
    hash = {};
    max = 0;

    for(i = 0; i < arr.length; i++){
        if(hash[arr[i]] !== undefined){
            hash[arr[i]]++;
        }
        else{hash[arr[i]] = 1;}
    }
    console.log(hash)

    for(const key in hash){
        if(key == hash[key]){
            max = Math.max(key, max)
        }
    }
    return max > 0 ? max : -1;
};