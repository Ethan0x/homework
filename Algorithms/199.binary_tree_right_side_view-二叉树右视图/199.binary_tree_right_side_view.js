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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = [];
    dfs(root, 0);
    return res;

    function dfs(root, depth) {
        if (root == null) {
            return;
        }
        if (depth == res.length) {
            res.push(root.val);
        }

        depth++;
        dfs(root.right, depth);
        dfs(root.left, depth);
    }
};