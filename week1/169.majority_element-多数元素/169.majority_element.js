/**
 * @param {number[]} nums
 * @return {number}
 */
// 【80-169. 多数元素】
var majorityElement = function (nums) {
    function majorityElementRec(nums, lo, hi) {
        if (lo === hi) {
            return nums[lo];
        }

        const mid = Math.floor((hi - lo) / 2) + lo;
        const left = majorityElementRec(nums, lo, mid);
        const right = majorityElementRec(nums, mid + 1, hi);

        if (left === right) {
            return left;
        }

        const leftCount = countInRange(nums, left, lo, hi);
        const rightCount = countInRange(nums, right, lo, hi);

        return leftCount > rightCount ? left : right;
    }

    function countInRange(nums, num, lo, hi) {
        let count = 0;
        for (let i = lo; i <= hi; i++) {
            if (nums[i] == num) {
                count++;
            }
        }
        return count;
    }

    return majorityElementRec(nums, 0, nums.length - 1);
};