// var minDistance = function (word1, word2) {
//     let dp = Array(word1.length + 1).fill(null).map(() => (Array(word2.length + 1).fill(0)));
//     for (let i = 0; i < dp.length; i++) {
//         dp[i][0] = i
//     }

//     for (let i = 0; i < dp[0].length; i++) {
//         dp[0][i] = i
//     }

//     for (let i = 1; i < dp.length; i++) {
//         for (let j = 1; j < dp[0].length; j++) {
//             dp[i][j] = Math.min(
//                 dp[i - 1][j] + 1, // left
//                 dp[i][j - 1] + 1, // right
//                 dp[i - 1][j - 1] + (word1[i - 1] != word2[j - 1] ? 1 : 0) // diagonal
//             );
//         }
//     }
//     return dp[dp.length - 1][dp[0].length - 1];
// };

var minDistance = function(word1, word2) {
    const memo = new Map()
    const dp = (i, j) => {
        if (memo.has(i + '' + j)) return memo.get((i + '' + j))
        if (i === -1) return j + 1  // s1走完了，将s2剩下的插入s1,需要j + 1步
        if (j === -1) return i + 1 // s2走完了，删除s1剩下的，需要i + 1步
        if (word1[i] === word2[j]) {
            // 什么都不做，i,j向前移动一位
            memo.set(i + '' + j, dp(i - 1, j - 1))
        } else {
            memo.set(i + '' + j, Math.min(
                dp(i, j - 1) + 1, // 插入，在word1[i]中插入和word2[j]一样的字符，相当于把word2向前移动1位，word1不动
                dp(i - 1, j) + 1, // 删除，把word1[i]删除，相当于word1向前移动1位,word2不动
                dp(i - 1, j - 1) + 1 // 替换操作，都向前移动1位
            ))
        }
        return memo.get(i + '' + j)
    }
    // 从后往前遍历，i, j 初始化指向最后一个索引
    return dp(word1.length - 1, word2.length - 1)
};
