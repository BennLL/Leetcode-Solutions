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
var postorderTraversal = function(root) {
    stack = [];
    ans = [];
    if(!root){return ans;}
    stack.push(root);

    while(stack.length > 0){
        copy = stack.pop();
        ans.unshift(copy.val);
        if(copy.left){stack.push(copy.left);}
        if(copy.right){stack.push(copy.right);}
        console.log(ans);
    }

    return ans;
};