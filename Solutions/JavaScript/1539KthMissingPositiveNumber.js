/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    num = 1;
    index = 0;
    while(k != 0){
        if(num != arr[index]){
            num++;
            k--;
        }else if(num == arr[index]){
            num++
            index++;
        }

        if(k === 0){
            return num-1;
        }
    }
};