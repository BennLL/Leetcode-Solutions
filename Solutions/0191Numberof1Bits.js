/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    copy = n.toString(2);
    count = 0;
    for(i = 0; i < copy.length; i++){
        if(copy[i] == '1'){count++;}
    }

    return count;
};
//integer to string method

var hammingWeight = function(n) {
    count = 0;
    while(n !== 0){
        if(n & 1 == 1){count++}
        n >>>=1;
    }

    return count;
};
// bit operation
// example for 11
// Initial value of n: n = 11
// Binary representation of n: 1011 (in 4 bits)
// Here's how the function hammingWeight would execute:

// Loop 1:

// n & 1 checks if the least significant bit (LSB) of n is 1. In this case, it is 1 (1011 & 0001 = 0001).
// Increment count as the LSB is 1. count = 1
// Right shift n by one position (n >>>= 1): 1011 becomes 0101
// Loop 2:

// n & 1 checks the LSB again. It is 1 (0101 & 0001 = 0001).
// Increment count as the LSB is 1. count = 2
// Right shift n by one position (n >>>= 1): 0101 becomes 0010
// Loop 3:

// n & 1 checks the LSB. It is 0 (0010 & 0001 = 0000).
// No increment of count.
// Right shift n by one position (n >>>= 1): 0010 becomes 0001
// Loop 4:

// n & 1 checks the LSB. It is 1 (0001 & 0001 = 0001).
// Increment count as the LSB is 1. count = 3
// Right shift n by one position (n >>>= 1): 0001 becomes 0000
// Loop exits as n becomes 0.

// After the loop completes:

// count has the value 3, indicating there are 3 set bits (1s) in the binary representation of 11.