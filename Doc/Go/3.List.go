package main

import (
	"errors"
	"fmt"
)

// 链表结构
type ListNode struct {
	Val  int
	Next *ListNode
}

// 初始化链表头，下面所有操作都基于带头链表
func NewListNode() *ListNode {
	return &ListNode{Next: nil}
}

// 获取链表长度
func (l *ListNode) Length() int {
	len := 0
	for l.Next != nil {
		len++
		l = l.Next
	}
	return len
}

// 插入节点
func (l *ListNode) InsertNode(d int) error {
	newNode := new(ListNode)
	newNode.Val = d
	newNode.Next = l.Next
	l.Next = newNode
	return nil
}

// 删除节点
func (l *ListNode) DelNode(d int) {
	if l == nil {
		errors.New("Empty List!")
		return
	}
	for l.Next != nil {
		if l.Next.Val == d {
			l.Next = l.Next.Next
			// return 是否全部删除与d相同数据
		}
		l = l.Next
	}
}

// 遍历单链表
func (l *ListNode) ListNode() {
	for l.Next != nil {
		fmt.Printf("%d", l.Next.Val)
		l = l.Next
	}
}

// 递归反转单链表
func ReverseList(pHead, node *ListNode) *ListNode {
	if node.Next == nil {
		pHead.Next = node
		return node
	}

	if n := ReverseList(pHead, node.Next); n != nil {
		n.Next = node
		node.Next = nil
	}

	return node
}

// 遍历反转单链表
func (pHead *ListNode) ReverseListV2() {
	pReverseHead := pHead
	var pNode = pHead.Next
	var pPrev *ListNode
	for pNode != nil {
		pNext := pNode.Next
		if pNext == nil {
			pReverseHead.Next = pNode
		}
		pNode.Next = pPrev
		pPrev = pNode
		pNode = pNext
	}
	return
}
