/**
 * @param {number[]} nums
 * @return {number}
 */
//【23-53. 最大子序和】
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        maxAns = Math.max(maxAns, pre);
    }
    return maxAns;
};