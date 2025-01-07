/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    n = n.toString().split("")
    console.log(n)
    sum = 0;
    for(i = 0; i < n.length; i++){
        n[i] = parseInt(n[i]);
        if((i) % 2 !== 0){
            sum += (n[i] * -1);
            console.log(n[i] * -1);
        }else{
            sum += n[i];
            console.log(n[i]);
        }
    }
    return sum;
};