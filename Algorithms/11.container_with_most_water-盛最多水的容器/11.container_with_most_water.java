// O(n^2) 
class Solution {
    public int maxArea(int[] a) {
        int max = 0;
        for (int i = 0; i < a.length - 1; i++){
            for (int j = i+1; j < a.length; j++) {
                int area = (j-i) * Math.min(a[i], a[j]);
                max = Math.max(max, area);
            }
        }
        return max;
    }
}

// O(n)
class Solution {
    public int maxArea(int[] a) {
        int max = 0;
        for (int i = 0, j = a.length - 1; i < j;) {
            int minHeight = a[i] < a[j] ? a[i++] : a[j--];
            max = Math.max(max, (j - i + 1) * minHeight);
        }
        return max;
    }
}