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
var isUnivalTree = function(root) {
    if(!root){return false}
    temp = root.val;
    stack = [];
    copy = root;

    while(copy || stack.length){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }

        copy = stack.pop();
        if(copy.val !== temp){return false}
        copy = copy.right;
    }

    return true;
};
// in order traversal 

var isUnivalTree = function(root, temp = root.val) {
    if(!root){return true}
    if(root.val !== temp){return false}
    return isUnivalTree(root.left, temp) && isUnivalTree(root.right, temp)
};
// if temp does not have a value, then it will take root.val
//recursion