/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode();
        dummy.next = head;

        ListNode guard = dummy;
        ListNode point = dummy.next;

        for (int step = 0; step < left - 1; step++) {
            guard = guard.next;
            point = point.next;
        }

        for (int i = 0; i < right - left; i++) {
            ListNode removed = point.next;
            point.next = point.next.next;
            removed.next = guard.next;
            guard.next = removed;
        }
        return dummy.next;
    }
}