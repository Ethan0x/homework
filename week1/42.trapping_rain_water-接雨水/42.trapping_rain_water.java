import java.util.Deque;
import java.util.LinkedList;

class Solution {
    public int trap(int[] height) {
        int ans = 0;
        Deque<Integer> stack = new LinkedList<Integer>();

        int n = height.length;
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && height[i] > height[stack.peek()]) {
                int top = stack.pop();
                if (stack.isEmpty()) {
                    break;
                }
                int left = stack.peek();
                int curWidth = i - left - 1;
                int curHeight = Math.min(height[left], height[i]) - height[top];
                ans += curHeight * curWidth;
            }
            stack.push(i);
        }
        return ans;
    }
}


// O(n2)
class Solution {
    public int trap(int[] height) {
        int sum = 0;
        for (int i = 0; i < height.length; i++) {
            int maxLeft = 0;
            for (int j = i - 1; j >= 0; j--) {
                if (height[j] > maxLeft) {
                    maxLeft = height[j];
                }
            }

            int maxRight = 0;
            for (int k = i + 1; k < height.length; k++) {
                if (height[k] > maxRight) {
                    maxRight = height[k];
                }
            }

            int min = Math.min(maxLeft, maxRight);
            if (min > height[i]) {
                sum = sum + (min - height[i]);
            }
        }
        return sum;
    }
}