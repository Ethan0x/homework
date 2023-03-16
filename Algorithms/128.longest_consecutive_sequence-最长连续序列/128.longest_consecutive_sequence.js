/**
 * @param {number[]} nums
 * @return {number}
 */
// 【60-128. 最长连续序列】
// 排序
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0
    nums.sort((a, b) => a - b)
    let max = 1
    let count = 1
    for (let i = 0; i < nums.length - 1; i++) {
        let cur = i, next = i + 1
        if (nums[cur] === nums[next]) continue // 相同就跳过本次循环
        if (nums[cur] + 1 === nums[next]) { // 发现连续项 count++
            count++
        } else { // 否则，count重置1
            count = 1
        }
        max = Math.max(max, count)
    }
    return max
};
// Set
var longestConsecutive = function (nums) {
    const set = new Set(nums) // set存放数组的全部数字
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) { // nums[i]没有左邻居，是序列的起点
            let cur = nums[i]
            let count = 1
            while (set.has(cur + 1)) { // cur有右邻居cur+1
                cur++ // 更新cur
                count++
            }
            max = Math.max(max, count) // cur不再有右邻居，检查count是否最大
        }
    }
    return max
}