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
var inorderTraversal = function(root) {
    stack = [];
    ans = [];
    copy = root

    while(copy || stack.length > 0){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }

        copy = stack.pop();
        ans.push(copy.val);

        copy = copy.right;
    }

    return ans;
};