/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 【55-322. 零钱兑换】
var coinChange = function (coins, amount) {
    if (amount == 0) return 0;
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }
    return dp[amount] == amount + 1 ? -1 : dp[amount];
};