class Solution {
    public int reverse(int x) {
        int res = 0;
        while (x != 0) {
            int tmp = res * 10 + x % 10;
            if (tmp / 10 != res) {
                return 0; // 溢出
            }
            res = tmp;
            x = x / 10;
        }
        return res;
    }
}