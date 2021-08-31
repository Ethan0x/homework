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
 * @return {number[][]}
 */
// 【31-103. 二叉树的锯齿形层序遍历】
var zigzagLevelOrder = function (root) {
    const res = [];
    if (root == null) {
        return res;
    }
    let curLevel = [root]; // 存放当前层的节点

    while (curLevel.length) {
        const nextLevel = []; // 存放下一层的节点
        const curLevelVals = []; // 存放当前层的节点值

        for (const node of curLevel) { // 遍历
            curLevelVals.push(node.val);
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }

        res.push(curLevelVals); // 当前层遍历结束，加入res
        res.length % 2 == 0 && curLevelVals.reverse(); // 偶数层进行翻转
        curLevel = nextLevel; // 更新
    }

    return res;
};