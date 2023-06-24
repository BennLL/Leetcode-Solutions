// var addDigits = function(num) {
//     temp = Array.from(String(num), Number);
//     sum = 11;

//     while(sum >= 10){
//         sum = 0;
//         for( i = 0; i < temp.length; i++){
//             sum += temp[i];
//         }
//         temp = Array.from(String(sum), Number);
//     }

//     return sum;
// };


// without loops
var addDigits = function(num){
    return 1 + (num - 1) % 9;
}

num = 10;
console.log(addDigits(num));

// return the last sum

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Input: num = 1
// Output: 1

// Input: num = 10
// Output: 1

// Input: num = 0
// Output: 0

