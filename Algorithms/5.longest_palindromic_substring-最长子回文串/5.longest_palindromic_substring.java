// o(n^3)
class Solution {
    public boolean isPalindromic(char[] s, int begin, int end) {
        while (begin < end) {
            if (s[begin] != s[end]) {
                return false;
            }
            begin++;
            end--;
        }
        return true;
    }

    public String longestPalindrome(String s) {
        int max = 1;
        int begin = 0;

        if (s.length() < 2) {
            return s;
        }

        char[] chs = s.toCharArray();
        int len = chs.length;
        for (int i = 0; i < len - 1; i++) {
            for (int j = i + 1; j < len; j++) {
                if (isPalindromic(chs, i, j) && j - i + 1 > max) {
                    begin = i;
                    max = j - i + 1;
                }
            }
        }

        return s.substring(begin, begin + max);
    }
}


// O(n2) 中心扩散
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return s;
        }

        int strlen = s.length();
        int maxStart = 0, maxLen = 0;

        for (int i = 0; i < strlen; i++) {
            int left = i - 1;
            int right = i + 1;
            int len = 1;
            while (left >= 0 && s.charAt(left) == s.charAt(i)) {
                left--;
                len++;
            }

            while (right < strlen && s.charAt(right) == s.charAt(i)) {
                right++;
                len++;
            }

            while (left >= 0 && right < strlen && s.charAt(left) == s.charAt(right)) {
                len = len + 2;
                right++;
                left--;
            }

            if (maxLen < len) {
                maxLen = len;
                maxStart = left;
            }
        }
        return s.substring(maxStart, maxStart + maxLen);
    }
}