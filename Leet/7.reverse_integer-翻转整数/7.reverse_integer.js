/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = 0;
    while (x != 0) {
        let tmp = res * 10 + x % 10;
        if (Math.floor(tmp / 10) != res) {
            return 0;
        }
        res = tmp;
        x = Math.floor(x / 10);
    }
    return res;
};