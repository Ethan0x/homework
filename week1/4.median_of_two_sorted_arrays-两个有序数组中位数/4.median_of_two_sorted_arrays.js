/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var findMedian = function (nums) {
        let len = nums.length;
        let index = Math.floor(len / 2);
        if (len % 2 == 0) {
            return (nums[index - 1] + nums[index]) / 2.0;
        } else {
            return nums[index];
        }
    }

    let l1 = nums1.length;
    let l2 = nums2.length;
    let lAll = l1 + l2;
    let nums = new Array(lAll);

    if (l1 == 0) {
        return findMedian(nums2);
    }

    if (l2 == 0) {
        return findMedian(nums1);
    }

    let i = 0, j = 0, k = 0;
    while (k != lAll) {
        if (i == l1) {
            while (j != l2) {
                nums[k++] = nums2[j++];
            }
            break;
        }
        if (j == l2) {
            while (i != l1) {
                nums[k++] = nums1[i++];
            }
            break;
        }
        if (nums1[i] > nums2[j]) {
            nums[k++] = nums2[j++];
        } else {
            nums[k++] = nums1[i++];
        }
    }
    return findMedian(nums);
};