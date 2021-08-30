/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 【22-54. 螺旋矩阵】
var spiralOrder = function (matrix) {
    let list = [];
    if (matrix == null || matrix.length == 0)
        return list;
    let m = matrix.length;
    let n = matrix[0].length;
    let i = 0;

    //统计矩阵从外向内的层数，如果矩阵非空，那么它的层数至少为1层
    let count = Math.floor((Math.min(m, n) + 1) / 2);
    //从外部向内部遍历，逐层打印数据
    while (i < count) {
        for (let j = i; j < n - i; j++) {
            list.push(matrix[i][j]);
        }
        for (let j = i + 1; j < m - i; j++) {
            list.push(matrix[j][(n - 1) - i]);
        }

        for (let j = (n - 1) - (i + 1); j >= i && (m - 1 - i != i); j--) {
            list.push(matrix[(m - 1) - i][j]);
        }
        for (let j = (m - 1) - (i + 1); j >= i + 1 && (n - 1 - i) != i; j--) {
            list.push(matrix[j][i]);
        }
        i++;
    }
    return list
};


