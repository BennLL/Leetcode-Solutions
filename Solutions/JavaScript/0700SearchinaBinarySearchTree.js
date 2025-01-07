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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    stack = [];
    copy = root;
    while(copy|| stack.length > 0){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }

        copy = stack.pop();
        if(copy.val === val){
            return copy
        }
        copy = copy.right;
    }

    return null;
};