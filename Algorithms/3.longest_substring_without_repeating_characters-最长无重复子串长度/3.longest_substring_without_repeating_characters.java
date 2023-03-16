import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> hm = new HashMap<>();
        int max = 0; int start = 0;

        for (int end = 0; end < s.length(); end++) {
            char ch = s.charAt(end);
            if (hm.containsKey(ch)) {
                start = Math.max(hm.get(ch) + 1, start);
            }
            max = Math.max(max, (end - start + 1));
            hm.put(ch, end);
        }
        return max;
    }
}