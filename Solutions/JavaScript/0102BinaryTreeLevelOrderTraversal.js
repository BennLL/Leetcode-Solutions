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
 * @return {number[][]}
 */
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    ans = [];

    function traverse(root, level){
        if(!root){
            return
        }else{
            if(level >= ans.length){
                ans[level] = [];
            }
            ans[level].push(root.val);
            traverse(root.left, level + 1);
            traverse(root.right, level + 1);
        }
    }

    traverse(root, 0);
    return ans;
};

//the function first checks the level and pushs the value into an array associated with the level
// we traverse left and right and increase level by 1 so it knows that it is in the next level
// so the levels would look like
// level 1
// level 2 2
// level 3 3 3 3
// level 4 4 4 4 4 4 4 4 
// assuming every node has two leaves