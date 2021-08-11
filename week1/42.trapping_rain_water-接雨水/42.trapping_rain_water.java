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
                int curHeight = Math.min(height[left], height[i] - height[top]);
                ans += curHeight * curWidth;
            }
            stack.push(i);
        }
        return ans;
    }
}