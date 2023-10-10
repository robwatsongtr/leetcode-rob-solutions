/*
226. Invert Binary Tree
Easy
1
Given the root of a binary tree, invert the tree, and return its root.

 
Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []

Inverting a tree is a common operation. The idea is to transform the tree in such a way that 
every left child becomes a right child, and every right child becomes a left child, effectiely
flippig the tree horizontally

The operation is alson known as "flipping" or "swapping" a binary tree.

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const tree = new TreeNode(4,
  new TreeNode( 2, new TreeNode(1), new TreeNode(3) ),
  new TreeNode( 7, new TreeNode(6), new TreeNode(9) ) 
)

const invertTree = (root) => {
  // base case 
  if( root === null ) return null 

  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
}