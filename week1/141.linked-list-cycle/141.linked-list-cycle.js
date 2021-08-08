/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// HashMap
var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false;
    }
    
     let hm = new Map();
     while (head != null) {
         if (hm.has(head)) {
             return true;
         }
         hm.set(head, true);
         head = head.next;
     }
     return false;
};

// Slow-fast

var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}