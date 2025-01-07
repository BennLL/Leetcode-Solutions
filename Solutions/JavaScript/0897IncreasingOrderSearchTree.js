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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    ans = new TreeNode(0);
    ansCopy = ans;
    stack = [];
    copy = root;

    while(copy || stack.length > 0){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }

        copy = stack.pop();
        ans.right = new TreeNode(copy.val)
        ans = ans.right;
        copy = copy.right;
    }

    return ansCopy.right;
};