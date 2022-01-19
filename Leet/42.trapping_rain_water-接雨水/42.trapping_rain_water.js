var trap = function(height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            ans += currWidth * currHeight;
        }
        stack.push(i);
    }
    return ans;
};

// O(n2)
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
     let sum = 0;
     for (let i = 0; i < height.length; i++) {
         let maxL = 0;
         for (let j = i - 1; j >= 0; j--){
             if (maxL < height[j]) {
                 maxL = height[j];
             }
         }
         let maxR = 0;
         for (let k = i + 1; k < height.length; k++) {
             if (maxR < height[k]) {
                 maxR = height[k];
             }
         }

         let min = Math.min(maxL, maxR);
         if (min > height[i]) {
             sum = sum + min - height[i];
         }
     }
     return sum;
};
