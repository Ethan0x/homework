/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
     let hm = new Map();
     let max = 0; let start = 0;

     for (let end = 0; end < s.length; end++) {
         let ch = s.charAt(end);
         if (hm.has(ch)) {
             start = Math.max(hm.get(ch) + 1, start);
         }
         max = Math.max(max, end - start + 1);
         hm.set(ch, end);
     }
     return max;
};