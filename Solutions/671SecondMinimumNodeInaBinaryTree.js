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
var findSecondMinimumValue = function(root) {
    stack = [];
    copy = root;
    values = [];
    while(copy || stack.length){
        while(copy){
            stack.push(copy);
            copy = copy.left;
        }

        copy = stack.pop();
        values.push(copy.val)
        copy = copy.right;
    }

    values = values.sort(function(a,b){return a-b})
    min = Math.min(...values);

    for(i = 0; i <= values.length; i++){
        if(values[i] > min){ return values[i]}
    }
    return -1;
};

