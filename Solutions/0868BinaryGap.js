/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    n = n.toString(2);
    count = 0;
    max = 0;
    stat = false;
    for(i = 0; i < n.length; i++){
        if(n[i] == '1'){
            if (stat) {
                max = Math.max(count, max);
                count = 0;
            }
            stat = true;
        }
        if(stat == true){
            count++;
        }
    }

    return max;
};