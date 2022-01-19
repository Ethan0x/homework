/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummy = new ListNode();
    dummy.next = head;
    let g = dummy, p = dummy.next;

    for (let step = 0; step < left - 1; step++) {
        g = g.next; p = p.next;
    }

    for (let i = 0; i < right - left; i++) {
        let removed = p.next;
        p.next = p.next.next;
        removed.next = g.next;
        g.next = removed;
    }
    return dummy.next;
};