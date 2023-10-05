/*
104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
                          
const tree = new TreeNode( 3, 
  // root left
  new TreeNode(9), 
  // root right    // root right left   // root right right 
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)


var maxDepth = function(root) {

  function dfs( node , depth ) {
    if(!node) return depth 

    let leftDepth = dfs(node.left, depth + 1)
    let rightDepth = dfs(node.right, depth + 1)

    return Math.max(leftDepth, rightDepth)
  }

  return dfs( root, 0 )
};


console.log( maxDepth(tree) )
