/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) return null;
    return merge(lists, 0, lists.length - 1);
};

var merge = function (lists, lo, hi) {
    if (lo == hi) return lists[lo];

    let mid = lo + Math.floor((hi - lo) / 2);
    let l1 = merge(lists, lo, mid);
    let l2 = merge(lists, mid + 1, hi);
    return merge2Lists(l1, l2);
}

var merge2Lists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
        l1.next = merge2Lists(l1.next, l2);
        return l1;
    } else {
        l2.next = merge2Lists(l2.next, l1);
        return l2;
    }
}