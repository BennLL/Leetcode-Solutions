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
// recursive method
// var isSymmetric = function(root) {
//     function check(left, right){
//         if(!left && !right){return true;}
//         if(!left || !right){return false;}
//         if(left.val !== right.val){return false}
//         return(check(left.left, right.right) && check(left.right, right.left));
//     }

//     if(!root){return true};
//     return check(root.left, root.right)
// };

var isSymmetric = function(root) {
    if(!root){return true};

    leftStack = [root.left];
    rightStack = [root.right];

    while(leftStack.length > 0 || rightStack.length > 0){
        left = leftStack.pop();
        right = rightStack.pop();
        if(!left && !right){continue}
        if(!left || !right){return false;}
        if(left.val !== right.val){return false;}

        leftStack.push(left.left)
        leftStack.push(left.right)
        rightStack.push(right.right);
        rightStack.push(right.left)
    }

    return true;
}