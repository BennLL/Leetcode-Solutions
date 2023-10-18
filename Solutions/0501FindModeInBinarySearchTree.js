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
var findMode = function(root) {
    stack = [];
    copy = root;
    hash = {};

    while(copy || stack.length > 0){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }
        copy = stack.pop();
        hash[copy.val] !== undefined ? hash[copy.val]++ : hash[copy.val] = 1;
        copy = copy.right;
    }

    max = 0;
    ans = [];
    for(key in hash){
        if(hash[key] > max){
            max = hash[key];
            ans = [];
            ans.push(key);
        }else if(hash[key] == max){
            ans.push(key);
        }
    }

    return ans
};