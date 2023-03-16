/**
 * @param {number} x
 * @return {number}
 */
// 【61-69. x 的平方根】
var mySqrt = function (x) {
    if (x < 2) return x
    let left = 1, mid, right = Math.floor(x / 2);
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        if (mid * mid === x) return mid
        if (mid * mid < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};
// 二分
function searchNum (target, nums) {
    if (!nums.length) return -1
    let left = 0
    let right = nums.length - 1
    let mid
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1
        }
        if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return -1
  }
