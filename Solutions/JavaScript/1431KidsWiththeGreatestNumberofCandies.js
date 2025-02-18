/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let high = Math.max(...candies);
    let ans = [];
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= high){
            ans.push(true);
        }else{
            ans.push(false);
        }
    }

    return ans;
};