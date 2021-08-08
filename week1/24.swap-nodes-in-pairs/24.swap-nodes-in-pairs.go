/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	dummy := &ListNode{}
	dummy.Next = head
	tmp := dummy

	for tmp.Next != nil && tmp.Next.Next != nil {
		node1, node2 := tmp.Next, tmp.Next.Next

		tmp.Next = node2
		node1.Next = node2.Next
		node2.Next = node1
		tmp = node1
	}
	return dummy.Next
}
