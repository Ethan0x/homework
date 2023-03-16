/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
     let dummy = new ListNode();
     dummy.next = head;
     let tmp = dummy;

     while (tmp.next != null && tmp.next.next != null) {
         let node1 = tmp.next;
         let node2 = tmp.next.next;

         tmp.next = node2;
         node1.next = node2.next;
         node2.next = node1;
         tmp = node1;
     }
     return dummy.next;
};