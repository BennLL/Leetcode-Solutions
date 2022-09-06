
var mySqrt = function(x) {
    for(y = 0; y < (x+2); y++){
        if(((y * y) > x)){
            return (y - 1);
        }
    }
};

x = 1870;
console.log(mySqrt(x));