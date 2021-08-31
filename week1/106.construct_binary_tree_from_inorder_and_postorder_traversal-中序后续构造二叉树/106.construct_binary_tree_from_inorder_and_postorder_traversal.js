/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 【117-106. 从中序与后序遍历序列构造二叉树】
var buildTree = function (inorder, postorder) {
    if (!postorder.length) return null

    let root = new TreeNode(postorder[postorder.length - 1])

    let index = inorder.findIndex(number => number === root.val)

    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, postorder.length - 1))

    return root
};