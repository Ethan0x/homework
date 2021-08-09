/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// Hashmap
func detectCycle(head *ListNode) *ListNode {
	pos := head
	visited := map[*ListNode]struct{}{}
	for pos != nil {
		if _, ok := visited[pos]; ok {
			return pos
		}
		visited[pos] = struct{}{}
		pos = pos.Next
	}
	return nil
}

// slow- fast
func detectCycle(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return nil
	}
	slow, fast := head, head

	for true {
		if fast == nil || fast.Next == nil {
			return nil
		}
		fast = fast.Next.Next
		slow = slow.Next
		if fast == slow {
			break
		}
	}
	pos := head
	for slow != pos {
		slow = slow.Next
		pos = pos.Next
	}
	return pos
}