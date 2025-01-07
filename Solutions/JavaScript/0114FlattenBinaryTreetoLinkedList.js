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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root){return}

    copy = root;
    while(copy){
        if(copy.left){
            last = copy.left;
            while(last.right){last = last.right;}
            temp = copy.right;
            copy.right = copy.left;
            last.right = temp;
            copy.left = null;
        }
        copy = copy.right;
    }
};