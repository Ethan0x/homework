/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 【75-49. 字母异位词分组】
// O(n(k+∣Σ∣))，其中 nn 是strs 中的字符串的数量，kk 是strs 中的字符串的的最大长度，Σ 是字符集
var groupAnagrams = function(strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(s) : map[count] = [s];
    }
    return Object.values(map);
};