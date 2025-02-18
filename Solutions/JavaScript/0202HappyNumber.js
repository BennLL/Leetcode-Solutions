/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while(n != 1){
        let num = 0;
        n = n.toString().split("").map(Number);
        for(i = 0; i < n.length; i++){
            num += (n[i] * n[i]);
        }   
        if(!set.has(num)){
            set.add(num);
        }else{
            return false;
        }
        n = num;
    }

    return true;
};

//updated