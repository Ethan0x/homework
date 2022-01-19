/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 【59-739. 每日温度】
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let res = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        /**
         * 取出下标进行元素值的比较
         */
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let preIndex = stack.pop();
            res[preIndex] = i - preIndex;
        }
        /**
         * 注意 放入的是元素位置
         */
        stack.push(i);
    }
    return res;
};