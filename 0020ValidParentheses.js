var isValid = function(s) {
    g = s.split("");
    f = [];
    console.log(g);

    for(x = 0; x < g.length; x++){
        if(g[x] == "("){
            f.push(")");
        }
        else if(g[x] == "["){
            f.push("]");
        }
        else if(g[x] == "{"){
            f.push("}");
        }
        else if (f.pop() != s[x]){
            return false;
        }
        // else{
        //     if(g[x] == f[f.length - 1]){
        //         f.pop(f.length - 1);
        //     }
        // }
    }
    console.log(f);
    return f.length == 0;

};

var s = "([}}])";
console.log(isValid(s));

// "([}}])"

    