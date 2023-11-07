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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    stack = [];
    copy = root;
    count = 1;

    while(stack.length || copy){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }

        copy = stack.pop();
        if(count == k){return copy.val}
        count++;
        copy = copy.right;
    }
    return
};