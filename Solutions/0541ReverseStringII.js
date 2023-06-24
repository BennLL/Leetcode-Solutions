/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 // going through individual characters
// var reverseStr = function(s, k) {
//     ans = "";
//     if(s.length < k){
//         return s.split("").reverse().join("");
//     }
//     s = s.split("");
    
//     temp = ""
//     count = 0;
//     stat = false;
//     for(i = 0; i < s.length + 1; i++){
//         if(count == k){
//             stat = !stat;
//             console.log(stat);
//         }
//         if(count == k && stat == false){
//             ans += temp;
//             console.log(temp, i);
//             temp = "";
//             count = 0;
//         }
        
//         if(count == k && stat == true){
//             temp = temp.split("").reverse().join("");
//             ans += temp;
//             console.log(temp, i);
//             temp = "";
//             count = 0;
//         }
//         if(s[i] !== undefined){
//             temp += s[i];
//         }
//         count++;
//     }
//     stat = !stat;
//     if(stat == true){
//         temp = temp.split("").reverse().join("");
//         ans += temp;
//     }else{
//         ans += temp;
//     }
    
//     return ans
// };
// splice method
var reverseStr = function(s, k) {
    s = s.split("");

    for(i = 0; i < s.length; i += 2*k){
        reverse = s.splice(i, k).reverse();
        s.splice(i, 0, ...reverse)
    }

    return s.join("");
};