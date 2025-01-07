/**
 * @param {number} num
 * @return {boolean}
 */
// var isPerfectSquare = function(num) {
//     return (num ** 0.5) % 1 == 0;
// };
// using math


var isPerfectSquare = function(num) {
    l = 1;
    h = num;
    while(l <= h){
        m = Math.floor((l + h) / 2);
        square = m * m;
        if(square == num){
            return true;
        }
        else if(square > num){
            h = m - 1;
        }else{
            l = m + 1;
        }
    }

    return false;
};