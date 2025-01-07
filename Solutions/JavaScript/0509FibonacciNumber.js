/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    prev = 0;
    next = 1;

    for(i = 0; i < n; i++){
        temp = next;
        next += prev;
        prev = temp;
    }

    return prev;
};