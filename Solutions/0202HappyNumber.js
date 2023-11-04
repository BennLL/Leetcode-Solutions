/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function square(num){
        sum = 0;
        while(num > 0){
            digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    set = new Set();
    while(n !== 1 && !set.has(n)){
        set.add(n)
        n = square(n);
    }

    return n == 1 ? true : false;
};