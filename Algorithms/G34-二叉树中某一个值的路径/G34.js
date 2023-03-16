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
 * @param {number} target
 * @return {number[][]}
 */
// 【100-剑指 Offer 34. 二叉树中和为某一值的路径】
var pathSum = function (root, target) {
    let res = [],
        path = [];
    DFS(root, 0);
    return res;

    function DFS(root, sum) {
        if (!root) return;
        // 最优解特殊处理，其他节点保持一致。
        // 因为先判断是否满足条件，此时val还未添加进path.
        if (!root.left && !root.right && (sum + root.val == target)) {
            // 采用这种写法，不用push也不用pop了。
            res.push([...path, root.val]);
            return;
        }

        path.push(root.val);
        DFS(root.left, sum + root.val);
        DFS(root.right, sum + root.val);
        path.pop();
    }
};