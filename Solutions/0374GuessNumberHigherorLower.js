/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    min = 1;
    max = n;
    while(min <= max){
        mid = Math.floor((min + max)/2);

        result = guess(mid);

        if(result == 0){
            return mid;
        }else if(result == -1){
            max = mid - 1;
        }else{
            min = mid + 1;
        }
        console.log("guess: " + mid)
        console.log("result: " + result)
        console.log("min: " + min)
        console.log("max: " + max)
    }
};