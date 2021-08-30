/**
 * @param {number[]} nums
 * @return {number}
 */
// 【24-41. 缺失的第一个正数】
//  置换
// var firstMissingPositive = function (nums) {
//     let n = nums.length;
//     for (let i = 0; i < n; ++i) {
//         while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
//             let temp = nums[nums[i] - 1];
//             nums[nums[i] - 1] = nums[i];
//             nums[i] = temp;
//         }
//     }
//     for (let i = 0; i < n; ++i) {
//         if (nums[i] != i + 1) {
//             return i + 1;
//         }
//     }
//     return n + 1;
// };

// 原地hash
var firstMissingPositive = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; ++i) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }
    for (let i = 0; i < n; ++i) {
        let num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    for (let i = 0; i < n; ++i) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
}
