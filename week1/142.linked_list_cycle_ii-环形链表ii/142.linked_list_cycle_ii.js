/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 【93-142. 环形链表 II】
// HashMap
 var detectCycle = function(head) {
     let pos = head;
     let visited = new Set();

     while (pos != null) {
         if (visited.has(pos)) {
             return pos;
         } 
         visited.add(pos);
         pos = pos.next;
     }
     return null;
 };


 // slow- fast
 var detectCycle = function(head) {
     if (head == null || head.next == null) {
         return null; 
     }
     
     let slow = head, fast = head;
     while (true) {
         if (fast == null || fast.next == null) {
             return null;
         }
         slow = slow.next;
         fast = fast.next.next;
         if (slow == fast) {
             break;
         }
     }
     let pos = head;
     while (pos != slow) {
         slow = slow.next;
         pos = pos.next;
     }
     return pos;
};