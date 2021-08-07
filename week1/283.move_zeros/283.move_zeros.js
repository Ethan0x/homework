// https://leetcode-cn.com/problems/move-zeroes/

// js O(n)
var moveZeroes = function (nums) {
    if (nums == null || nums.length === 0) {
        return;
    }

    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
};

