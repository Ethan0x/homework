/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 【50-221. 最大正方形】
var maximalSquare = function (matrix) {
    if (!matrix.length || !matrix[0].length)
        return 0
    let dp = matrix.slice(), max = Math.max(...matrix[0])
    for (let i = 0; i < matrix.length; i++) {
        max = Math.max(matrix[i][0], max)
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] == '0')
                continue
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            if (dp[i][j] > max)
                max = dp[i][j]
        }
    }
    return max ** 2
};