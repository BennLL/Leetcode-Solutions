/**
 * @param {number} n
 * @return {boolean}
 */

// loop answer
// var isPowerOfFour = function(n) {
//     num = 0;
//     stat = true;
//     while(stat){
//         if(4 ** num == n){
//             return true;
//         }
//         if(4 ** num > n){
//             return false
//         }
//         num++
//     }
//     return;
// };

//math
var isPowerOfFour = function(n) {
    return(Math.log2(n) % 2 == 0 && n > 0);
};