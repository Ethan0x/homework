/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 【95-340. 至多包含 K 个不同字符的最长子串】
var lengthOfLongestSubstringKDistinct = function (s, k) {
    let window = {}, l = 0, r = 0, count = 0, ans = 0;
    while (r < s.length) {
        let c1 = s[r];
        window[c1] ? window[c1]++ : window[c1] = 1;
        r++;
        while (Object.keys(window).length > k) {
            let c2 = s[l];
            window[c2]--;
            if (window[c2] === 0) delete window[c2];
            l++;
        }
        ans = Math.max(ans, r - l);
    }
    return ans;
};
