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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    stack = [];
    sum = 0;
    copy = root;
    while(copy || stack.length > 0){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }

        copy = stack.pop();
        if(copy.val >= low && copy.val <= high){sum += copy.val;}
        copy = copy.right;
    }

    return sum;
};