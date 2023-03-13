package main

import "fmt"

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1, l2 *ListNode) (head *ListNode) {
	var tail *ListNode
	carry := 0
	for l1 != nil || l2 != nil {
		n1, n2 := 0, 0
		if l1 != nil {
			n1 = l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			n2 = l2.Val
			l2 = l2.Next
		}

		sum := n1 + n2 + carry
		sum, carry = sum%10, sum/10

		if head == nil {
			head = &ListNode{Val: sum}
			tail = head
		} else {
			tail.Next = &ListNode{Val: sum}
			tail = tail.Next
		}

	}
	if carry > 0 {
		tail.Next = &ListNode{Val: carry}
	}
	return
}

/*
	test case
	Input :
	[2,4,3]
	[5,6,4]

	Output:
	[7,0,8]
*/

// 初始化
func New() *ListNode {
	return &ListNode{0, nil}
}

// 遍历输出
func (head *ListNode) Traverse() {
	point := head
	fmt.Println("--------start----------")
	for nil != point {
		fmt.Println(point.Val)
		point = point.Next
	}
	fmt.Println("--------end----------")
}

// 插入
func (head *ListNode) Insert(val int) {
	p := head
	for p.Next != nil {
		p = p.Next // 位移至尾节点
	}
	s := &ListNode{Val: val}
	p.Next = s
	if p.Val == 0 { // 插入时发现首节点为空时前移
		p.Val = p.Next.Val
		p.Next = p.Next.Next
	}
}
