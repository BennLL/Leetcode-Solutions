/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    ans = [];
    for(i = 1; i < n+1; i++){
        if(i % 3 == 0 && i % 5 == 0){
            ans.push("FizzBuzz");
        }
        else if(i % 3 == 0){
            ans.push("Fizz");
        }
        else if(i % 5 == 0){
            ans.push("Buzz");
        }
        else{ans.push(i.toString())}
    }
    return ans;
};