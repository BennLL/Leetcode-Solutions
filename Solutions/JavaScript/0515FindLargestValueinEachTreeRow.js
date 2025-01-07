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
var largestValues = function(root) {
    levels = [];
    
    function traverse(root, level){
        if(!root){
            return
        }else{
            if(level >= levels.length){
                levels[level] = [];
            }
            levels[level].push(root.val);
            traverse(root.left, level + 1);
            traverse(root.right, level + 1);
        }

    }
    traverse(root, 0)

    ans = [];
    
    for(i = 0; i < levels.length; i++){
        ans.push(Math.max(...levels[i]))
    }

    return ans;
}

