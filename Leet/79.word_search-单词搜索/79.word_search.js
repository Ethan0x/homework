/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 【47-79. 单词搜索】
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (search(board, word, i, j, 0))
                return true;
        }
    }
    return false;
};

const search = (B, W, row, col, wIdx) => {
    if (wIdx === W.length) return true;
    if (row < 0 || row >= B.length || col < 0 || col >= B[row].length) return false;

    if (W[wIdx] === B[row][col]) {
        B[row][col] = '#'; // Visited
        if (
            search(B, W, row + 1, col, wIdx + 1) ||
            search(B, W, row - 1, col, wIdx + 1) ||
            search(B, W, row, col + 1, wIdx + 1) ||
            search(B, W, row, col - 1, wIdx + 1)
        )
            return true;
        B[row][col] = W[wIdx];
    }
    return false;
};