/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    s = s.split("");
    t = t.split("")
    
    arr1 = [];
    arr2 = [];
    
    i = 0;
    while(s[i] != null || t[i] != null){
        if(s[i] != "#" && s[i] != null){
            arr1.push(s[i]);
        }else if(s[i] == "#"){
            arr1.pop();
        }
        
        if(t[i] != "#" && t[i] != null){
            arr2.push(t[i]);
        }else if(t[i] == "#"){
            arr2.pop();
        }
        
        i++;
    }
    
    s = arr1.join('');
    console.log(arr1);
    t = arr2.join('');
    console.log(arr2);
    
    return(s == t);
    
};