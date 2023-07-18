/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    temp = [];
    ans = [];

    for(i = 0; i < arr.length; i++){
        temp.push(arr[i]);
        if(temp.length == size){
            ans.push(temp);
            temp = [];
        }
    }

    if(temp.length > 0){
        ans.push(temp);
        return ans;
    }else{
        return ans;
    }
};