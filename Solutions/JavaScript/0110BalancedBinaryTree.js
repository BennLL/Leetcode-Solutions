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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(node){
        if(!node){return 0;}
        const left = height(node.left);
        const right = height(node.right);

        return Math.max(left, right) + 1;
    }

    if(!root){return true};

    left = height(root.left);
    right = height(root.right);

    if(Math.abs(left - right) <= 1){
        return isBalanced(root.left) && isBalanced(root.right);
    }
    return false;
};