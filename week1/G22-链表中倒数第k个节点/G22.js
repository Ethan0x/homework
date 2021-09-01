/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 【105-剑指 Offer 22. 链表中倒数第k个节点】
var getKthFromEnd = function (head, k) {
    let fast, slow;
    fast = slow = head;
    while (k--) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};