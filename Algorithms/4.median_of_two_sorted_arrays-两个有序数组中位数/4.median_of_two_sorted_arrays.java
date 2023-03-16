class Solution {
    public double findMedian(int[] nums) {
        int len = nums.length;
        if (len % 2 == 0) {
            return (nums[len / 2 - 1] + nums[len / 2]) / 2.0;
        } else {
            return nums[len / 2];
        }
    }

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int len1 = nums1.length;
        int len2 = nums2.length;
        int lenAll = len1 + len2;
        int[] nums = new int[lenAll];

        if (len1 == 0) {
            return findMedian(nums2);
        }
        if (len2 == 0) {
            return findMedian(nums1);
        }
        int i = 0;
        int j = 0;
        int k = 0;

        while (k != lenAll) {
            if (i == len1) {
                while (j != len2) {
                    nums[k++] = nums2[j++];
                }
            }
            if (j == len2) {
                while (i != len1) {
                    nums[k++] = nums1[i++];
                }
            }
            if (nums1[i] < nums2[j]) {
                nums[k++] = nums1[i++];
            } else {
                nums[k++] = nums2[j++];
            }
        }
        return findMedian(nums);
    }
}