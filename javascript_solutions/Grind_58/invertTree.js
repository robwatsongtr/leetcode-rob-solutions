
// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
  if( root === null) return null // base case 

  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left) // recursively go down left side
  invertTree(root.right) // recursively go down right side 

  return root 
};