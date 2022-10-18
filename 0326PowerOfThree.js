var isPowerOfThree = function(n) {
    temp = n;
    if(n <= 0){
        return false;
    }
    if(n == 1){
        return true;
    }

    if(n > 1){
        while(temp != 3){
            temp /= 3;
            if(temp < 3){
                return false;
            }
        }
        return true;
    }
// This part is not needed because it was not specified that x has to be greater than -1 
    if(n < 1){
        while(temp != (1/3)){
            temp *= 3;
            if(temp > (1/3)){
                return false;
            }
        }
        return true;
    }

    console.log("outside");
    return false;
};

// // Without loops
// var isPowerOfThree = function(n) {
//     return n > 0 && (1162261467 % n === 0);
// };



n = 2187;
console.log(isPowerOfThree(n));

// input: 27 
// output: true
// 3^3 == 29

// input: 0
// output: false
// 3^x != 0

// input: 1
// out: true
// 3^0 == 1