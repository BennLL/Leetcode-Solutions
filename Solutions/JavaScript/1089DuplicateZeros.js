/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    ans = [];
    for(i = 0; i < arr.length; i++){
        //console.log(ans)
        if(ans.length == arr.length){
            break;
        }
        ans.push(arr[i]);
        if(arr[i] == 0 && ans.length < arr.length){
            ans.push(0);
        }
    }
    for(i = 0; i < ans.length; i++){
        arr[i] = ans[i];
    }
};