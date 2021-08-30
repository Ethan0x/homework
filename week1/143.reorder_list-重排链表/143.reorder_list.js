/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 【25-143. 重排链表】
var reorderList = function (head) {
    if (head == null) {
        return;
    }
    let mid = middleNode(head);
    let l1 = head;
    let l2 = mid.next;
    mid.next = null;
    l2 = reverseList(l2);
    mergeList(l1, l2);
};

var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

var mergeList = function(l1, l2) {
    let l1_tmp;
    let l2_tmp;
    while (l1 != null && l2 != null) {
        l1_tmp = l1.next;
        l2_tmp = l2.next;

        l1.next = l2;
        l1 = l1_tmp;

        l2.next = l1;
        l2 = l2_tmp;
    }
}
