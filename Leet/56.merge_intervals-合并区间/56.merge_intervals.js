var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let pre = intervals[0];
    let result = [];

    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        if (cur[0] > pre[1]) {
            result.push(pre);
            pre = cur;
        } else {
            pre[1] = Math.max(cur[1], pre[1]);
        }
    }
    result.push(pre);
    return result;
}