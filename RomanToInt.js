var romanToInt = function(s) {
    var z = s.split("")
    var num = 0
    for(x = 0; x < s.length; x++){
        switch(z[x]){
            case "I":
                num += 1
                break
            case "V":
                num += 5
                break
            case "X":
                num += 10
                break
            case "L":
                num += 50
                break
            case "C":
                num += 100
                break
            case "D":
                num += 500
                break
            case "M":
                num += 1000
                break
        }
        if ((z[x + 1] == "X" || z[x + 1] == "V") && (z[x] == "I")){
            num -= 2
        }
        if ((z[x + 1] == "L" || z[x + 1] == "C") && (z[x] == "X")){
            num -= 20
        }
        if ((z[x + 1] == "D" || z[x + 1] == "M") && (z[x] == "C")){
            num -= 200
        }
    }
    return num
};

var s = "MCMXCIV"
console.log(romanToInt(s))