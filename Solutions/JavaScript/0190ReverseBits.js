/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    ans = 0;
    bit  = 32;
    while(bit > 0){
        bit--;
        ans *= 2;
        ans += n & 1;
        n >>>= 1;
    }

    return ans;
};

// 1. **Inputs**:
//    - `n`: A positive integer whose bits need to be reversed.

// 2. **Variables**:
//    - `ans`: Initialized to `0`. It will store the result of reversed bits.
//    - `bit`: Initialized to `32`. It's used as a counter to reverse the bits in a 32-bit integer.

// 3. **Explanation**:
//    - The function aims to reverse the bits of the input number `n`.
//    - `while` loop: It iterates `32` times, once for each bit in a 32-bit integer.
//    - Inside the loop:
//      - `bit--`: Decrements the `bit` counter for each iteration.
//      - `ans *= 2`: Multiplies the `ans` by `2`, effectively left-shifting `ans` by one bit.
//      - `ans += n & 1`: Adds the least significant bit (LSB) of `n` to `ans`. This operation ensures that the LSB of `n` becomes the MSB (most significant bit) of the `ans`.
//      - `n >>>= 1`: Right shifts `n` by one bit, which effectively removes the processed LSB from `n`.

// 4. **Output**:
//    - The `ans` variable will hold the result after `32` iterations of reversing the bits of the input number `n`.

// This function loops through the 32 bits of the input number `n`, extracts the LSB of `n`, and constructs the result `ans` by reversing the bits of the input integer. Finally, it returns the integer with reversed bits.