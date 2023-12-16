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
var findBottomLeftValue = function(root) {
    ans = 0;
    next = 0;

    function traverse(root, level){
        if(!root){return}
        if(level == next){
            ans = root.val;
            next += 1;
        }
        traverse(root.left, level + 1);
        traverse(root.right, level + 1);
    }

    traverse(root, 0)
    return ans;
};

// Initialization:

// nextMaxLevel: This variable keeps track of the next level in the tree that the algorithm is going to explore.
// bottomleftVal: It stores the leftmost value in the last row, initialized to 0.
// Depth-First Search (DFS) Function (dfs):

// The function is recursive and performs a depth-first search traversal on the tree.
// It accepts two parameters: root (the current node being explored) and level (the level of the current node).
// If the root node doesn't exist (null), the function simply returns, as there's no more tree to explore.
// When the current level matches nextMaxLevel, it means the algorithm has moved to a new row. In this case:
// It updates bottomleftVal with the value of the leftmost node at this level.
// Increments nextMaxLevel to indicate that it's now exploring the next level.
// It recursively calls itself on the left and right children of the current node, incrementing the level by 1 for each child node.
// Execution:

// The dfs function is initially called with the root node and a starting level of 0.
// It traverses the entire tree, updating bottomleftVal whenever it encounters a new level.
// Return:

// Once the DFS traversal completes, bottomleftVal will contain the leftmost value at the last level of the tree.
// The function returns this value.