/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 【63-236. 二叉树的最近公共祖先】
var lowestCommonAncestor = function (root, p, q) {
    if (root === p || root === q || root === null)
        return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right)
        return root;
    if (!left)
        return right;
    return left;
};