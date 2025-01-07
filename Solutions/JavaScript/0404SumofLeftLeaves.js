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
var sumOfLeftLeaves = function(root) {
    ans = 0;
    stack = [root];

    while(stack.length){
        copy = stack.pop();

        if(copy.left){
            if(!copy.left.left && !copy.left.right){
                ans += copy.left.val;
            }else{
                stack.push(copy.left);
            }
        }

        if(copy.right){
            stack.push(copy.right);
        }
    }

    return ans;
};