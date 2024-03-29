/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    profit = 0;
    min = prices[0];
    for(i = 0; i < prices.length; i++){
        if(prices[i] < min){min = prices[i]};
        if(prices[i] - min > profit){profit = prices[i] - min};
    }
    return profit;
};