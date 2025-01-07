/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let hash = {};
    let size = arr.length;
    for(i = 0; i < arr.length; i++){
        if(hash[arr[i]] == undefined){
            hash[arr[i]] = 1;
        }else{
            hash[arr[i]] += 1;
        }

        if((hash[arr[i]] / size) > 0.25){
            return arr[i];
        }
    }

    return 0;
};

// can be o(1)