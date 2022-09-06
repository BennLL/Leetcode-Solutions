var lengthOfLastWord = function(s) {
    s = s.split("").reverse();

    for(x = 0; x < s.length; x++){
        if(s[x] !== " "){
            break;
        }
    }
    s.splice(0, x);
    console.log(s);

    for(y = 0; y < s.length; y++){
        if(s[y] == " "){
            break;
        }
    }
    return y;
};

s = "why yes   ";
console.log(lengthOfLastWord(s));
//works