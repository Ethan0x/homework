/**
 * @param {number[]} heights
 * @return {number}
 */
// 【52-84. 柱状图中最大的矩形】
// 单调栈
var largestRectangleArea = function (heights) {
  let maxArea = 0
  const stack = []
  heights = [0, ...heights, 0]
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) { // 当前bar比栈顶bar矮
      const stackTopIndex = stack.pop() // 栈顶元素出栈，并保存栈顶bar的索引
      maxArea = Math.max(               // 计算面积，并挑战最大面积
        maxArea,                        // 计算出栈的bar形成的长方形面积
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i)                       // 当前bar比栈顶bar高了，入栈
  }
  return maxArea
};

// 双指针
var largestRectangleArea = function (heights) {
  let sum = 0;
  for (let i = 0; i < heights.length; i++) {
    let left = i;
    let right = i;
    for (; left >= 0; left--) {
      if (heights[left] < heights[i]) break;
    }
    for (; right < heights.length; right++) {
      if (heights[right] < heights[i]) break;
    }
    let w = right - left - 1;
    let h = heights[i];
    sum = Math.max(sum, w * h);
  }
  return sum;
}