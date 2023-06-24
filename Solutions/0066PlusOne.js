var plusOne = function(digits) {
    digits.unshift(0);
    digits[(digits.length - 1)]++;
    console.log(digits[(digits.length - 1)])
    for(x = digits.length; x > 0; x--){
        if(digits[x] > 9){{
            digits[x] = 0;
            digits[x-1]++;
        }
        }
    }
    if(digits[0] == 0){
        digits.shift();
    }
    return digits;
};

digits = [8,9,9,9];
console.log(plusOne(digits));

// digits = digits.join("");
// console.log("joined: " + digits);
// digits = parseFloat(digits);
// console.log("Float: " + digits);
// digits++;
// digits = digits.toString();
// console.log(digits);
// digits = digits.split("");
// return digits;

//[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
//[8,9,9,9]
//completed