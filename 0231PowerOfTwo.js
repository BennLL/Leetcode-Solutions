var isPowerOfTwo = function(n) {
    power = 0;
    while(Math.pow(2,power) < n){
        power++;
    }

    if(Math.pow(2,power) == n){
        return true;
    }else{return false;}
};

n = 56;
console.log(isPowerOfTwo(n));