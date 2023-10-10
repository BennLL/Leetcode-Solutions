/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    copy = text;
    text = text.split("");
    count = 0;
    for(i = 0; i < text.length; i++){
        if(text[i] == " "){count++;}
    }
    copy = copy.trim().split(/\s+/);
    if(copy.length == 1){
        space = Math.floor(count / (copy.length));
        leftOver = count % (copy.length);
    }else{
        space = Math.floor(count / (copy.length - 1));
        leftOver = count % (copy.length - 1);
    }

    ans = "";
    for(i = 0; i < copy.length; i++){
        ans += copy[i];
        if(i !== copy.length - 1){ans = ans + " ".repeat(space);}
    }

    return copy.length == 1 ? ans + " ".repeat(space) : ans + " ".repeat(leftOver);
};