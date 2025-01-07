/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    sum = 1;
    for(i = 2; i * i <= num; i++){
        if(num % i == 0){
            if(i * i != num){
                sum = sum + i + num / i;
            }else{
                sum += i;
            }
        }
        i++;
    }

    return(sum == num && num != 1);
};
// inefficient solution
// var checkPerfectNumber = function(num) {
//     sum = 0;
//     for(i = 0; i < ((num / 2) + 1); i++){
//         if(num % i == 0 && i !== num){
//             sum += i;
//         }
//     }

//     return(sum == num);
// };