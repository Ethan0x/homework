/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 【94-230. 二叉搜索树中第K小的元素】
// 递归
let kthSmallest = function (root, k) {
    let res = null
    let inOrderTraverseNode = function (node) {
        if (node !== null && k > 0) {
            // 先遍历左子树
            inOrderTraverseNode(node.left)
            // 然后根节点
            if (--k === 0) {
                res = node.val
                return
            }
            // 再遍历右子树
            inOrderTraverseNode(node.right)
        }
    }
    inOrderTraverseNode(root)
    return res
}
//迭代
let kthSmallest = function (root, k) {
    let stack = []
    let node = root

    while (node || stack.length) {
        // 遍历左子树
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()
        if (--k === 0) {
            return node.val
        }
        node = node.right
    }
    return null
}
