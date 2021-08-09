/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false;
    }
    
    let pairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);

    let stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(ch);
        }
    }
    return !stk.length;
};