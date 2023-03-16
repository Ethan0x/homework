/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 【71-66. 加一】
var plusOne = function (digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0)
            return digits;
    }
    digits = new Array(len + 1).fill(0);
    digits[0] = 1;
    return digits;
};