var longestCommonPrefix = function(strs) {
    var string = ""
    var lowest = 100
    for(x = 0; x < strs.length; x++){
        strs[x] = strs[x].split("")
        if(strs[x].length < lowest){
            lowest = strs[x].length
        }
    }

    /*
    for(x = 0; x < strs.length; x++){
        if(strs[x].length < lowest){
            lowest = strs[x].length
        }
    }
    */

    for(y = 0; y < lowest; y++){
        for(z = 0; z < strs.length; z++){
            var temp = true
            if (strs[z][y] == strs[0][y]){
                temp = true
            }
            else{
                temp = false
                return string
            }
        }
    if(temp === true){
        string += strs[0][y]
    }
    }

    return string
};

var strs = ["cir", "car"]
console.log(longestCommonPrefix(strs))

/*
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
//completed
