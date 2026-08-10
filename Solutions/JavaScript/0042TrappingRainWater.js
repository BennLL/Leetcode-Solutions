/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length - 1;
    let maxLeft = height[l];
    let maxRight = height[r];
    let total = 0;
    while(l !== r){
        if(maxLeft < maxRight){
            l++;
            maxLeft = Math.max(maxLeft, height[l]);
            total += maxLeft - height[l];
        }else{
            r--;
            maxRight = Math.max(maxRight, height[r]);
            total += maxRight - height[r];
        }
    }

    return total;
};

//console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 1 + 1 + 2 + 1 + 1 = 6
console.log(trap([4,2,0,3,2,5])); //2 + 4 + 1 + 2 = 9;