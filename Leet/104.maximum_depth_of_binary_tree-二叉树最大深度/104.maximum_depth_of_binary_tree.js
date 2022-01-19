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
 * @return {number}
 */
// 【77-104. 二叉树的最大深度】
// 递归
var maxDepth = function (root) {
    //使用递归的方法 递归三部曲
    //1. 确定递归函数的参数和返回值
    const getDepth = function (node) {
        //2. 确定终止条件
        if (node === null) {
            return 0;
        }
        //3. 确定单层逻辑
        let leftDepth = getDepth(node.left);
        let rightDepth = getDepth(node.right);
        let depth = 1 + Math.max(leftDepth, rightDepth);
        return depth;
    }
    return getDepth(root);
};

// 二叉树最大深度层级遍历
var maxDepth = function (root) {
    //使用递归的方法 递归三部曲
    //1. 确定递归函数的参数和返回值
    const getDepth = function (node) {
        //2. 确定终止条件
        if (node === null) {
            return 0;
        }
        //3. 确定单层逻辑
        let leftDepth = getDepth(node.left);
        let rightDepth = getDepth(node.right);
        let depth = 1 + Math.max(leftDepth, rightDepth);
        return depth;
    }
    return getDepth(root);
};