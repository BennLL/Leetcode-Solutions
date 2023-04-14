var climbStairs = function(n) {
    x = 1;
    y = 1;
    for(i = 0; i < n; i++){
        temp = x + y;
        x = y;
        y = temp;
    }

    return x;
};

n = 4;
console.log(climbStairs(n));

