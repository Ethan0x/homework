/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = 1;
    let begin = 0;
    let chs = Array.from(s);
    let len = chs.length;

    if (len < 2) {
        return s;
    }

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (isPalindromic(chs, i, j) && j - i + 1 > max) {
                max = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + max);

};

var isPalindromic = function (charArr, begin, end) {
    while (begin < end) {
        if (charArr[begin] != charArr[end]) {
            return false;
        }
        begin++;
        end--;
    }
    return true;
}


// O(n2) 中心扩散法
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
     let strLen = s.length;
     let maxStart = 0, maxLen = 0;

     for (let i = 0; i < strLen; i++) {
         let left = i - 1;
         let right = i + 1;
         let len = 1;

         while (left >= 0 && s.charAt(left) == s.charAt(i)) {
             len++;
             left--;
         }

         while (right < strLen && s.charAt(right) == s.charAt(i)) {
             right++;
             len++;
         }

         while (right < strLen && left >= 0 && s.charAt(left) == s.charAt(right)) {
             left--;
             right++;
             len = len + 2;
         }

         if (len > maxLen) {
             maxLen = len;
             maxStart = left;
         }
     }
     return s.substring(maxStart + 1, maxStart + maxLen + 1);
};
