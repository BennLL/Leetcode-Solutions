/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    count = 0;
    for(i = 0; i < flowerbed.length; i++){
        if((flowerbed[i - 1] == 0 || flowerbed[i - 1] == null) && (flowerbed[i + 1] == 0 || flowerbed[i + 1] == null) && flowerbed[i] !== 1){
            flowerbed[i] = 1;
            count++;
        }
    }

    return count >= n;
};