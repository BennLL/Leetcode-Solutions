var isPalindrome = function(s) {
    x = s.replace(/[^A-Za-z0-9]/g, '');
    x = x.toLowerCase();
    y = x.split("").reverse().join("");
    if (x == y){
        return true
    }
    else{
        return false
    }
    return x;
};

s = " ";
console.log(isPalindrome(s));
//completed