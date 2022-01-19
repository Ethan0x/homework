// O(n^2)
var maxArea = function (a) {
    let max = 0;

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            let area = (j - i) * Math.min(a[i], a[j]);
            max = area > max ? area : max;
        }
    }
    return max;
};


// O(n)

var maxArea = function (a) {
    let max = 0;
    for (let i = 0, j = a.length - 1; i < j;) {
        let minH = a[i] < a[j] ? a[i++] : a[j--];
        max = Math.max(max, minH * (j - i + 1));
    }
    return max;
}