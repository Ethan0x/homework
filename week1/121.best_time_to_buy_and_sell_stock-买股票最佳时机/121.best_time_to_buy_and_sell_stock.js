/**
 * @param {number[]} prices
 * @return {number}
 */
// 【28-121. 买卖股票的最佳时机】
var maxProfit = function (prices) {
    let minprice = Number.MAX_SAFE_INTEGER;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        } else if (prices[i] - minprice > maxprofit) {
            maxprofit = prices[i] - minprice;
        }
    }
    return maxprofit;
};