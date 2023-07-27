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
var invertTree = function(root) {
    stack = [root];

    while(stack.length > 0){
        temp = stack.pop();
        if(temp !== null){
            [temp.left, temp.right] = [temp.right, temp.left];
            stack.push(temp.left, temp.right);
        }
    }

    return root;
};