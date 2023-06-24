/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("")
    start = 0;
    end = s.length - 1;
    vowels = ["a","e","i","o","u", "A", "E", "I", "O", "U"]

    while(start < end){
        if(vowels.includes(s[start]) && vowels.includes(s[end])){
            temp = s[end];
            s[end] = s[start];
            s[start] = temp;
            start++;
            end--;
        }
        if(!vowels.includes(s[start])){
            start++;
        }
        if(!vowels.includes(s[end])){
            end--;
        }
    }

    return s.join("")

};
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function(s) {
//     if(s == " "){
//         return s;
//     }
//     s = s.split("")
//     vowels = ["a","e","i","o","u", "A", "E", "I", "O", "U"]
//     vList = [];
//     for(i = 0; i < s.length; i++){
//         if(vowels.includes(s[i])){
//             vList.push(s[i]);
//         }
//     }

//     vList.reverse();
//     index = 0;

//     for(i = 0; i < s.length; i++){
//         if(vowels.includes(s[i])){
//             s[i] = vList[index];
//             index++;
//         }
//     }

//     return s.join("")
// };
// can be faster 