/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    console.log("\"" + s + "\"");
    s += " ";
    s = s.split("")
    tempstring = "";
    RString = "";
    
    for(i = 0 ; i < s.length; i++){
        if(s[i] != " "){
            tempstring += s[i];
        }else{
            tempstring = tempstring.split("").reverse().join("");
            RString += tempstring;
            if(i != s.length - 1){
                RString += s[i];
            }
            tempstring = "";
        }
    }

    
    return RString;
    
};

s = "God Ding";
console.log("\"" + reverseWords(s) + "\"");

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
