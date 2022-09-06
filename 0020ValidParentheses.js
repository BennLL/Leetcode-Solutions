//doesn't work
var isValid = function(s) {
    s = s.split("")
    
    console.log(s)
    
    let condition = true
    if((s.length % 2) != 0){
        return false
    }
    
    for(x = 0; x < s.length; x++){
        switch(s[x]){
            case '(':
                if(s[x+1] == ')'){
                    condition = true
                    x++
                }
                break;
            case '[':
                if(s[x+1] == ']'){
                    condition = true
                    x++
                }
                break;
            case '{':
                if(s[x+1] == '}'){
                    condition = true
                    x++
                }
                break;
            default:
                condition = false
                break;
        }
    }
    return condition
};

var s = "{[]}"
console.log(isValid(s))

/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/