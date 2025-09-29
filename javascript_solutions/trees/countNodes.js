/*
222. Count Complete Tree Nodes

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled 
in a complete binary tree, and all nodes in the last level are as far left as possible.
 It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:

Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:

Input: root = []
Output: 0

Example 3:

Input: root = [1]
Output: 1

Follow Up:
Design an algorithm that runs in less than O(n) time complexity.

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const tree = new TreeNode(1,
  new TreeNode( 2, new TreeNode(4), new TreeNode(5) ),
  new TreeNode( 3, new TreeNode(6))
)

// O(n) complexity to start:

var countNodes = function(root) {
  let count = 0

  function traverse(node) {
    if(!node) return 0
    if( node.left ) traverse( node.left ) 
    if( node.right ) traverse( node.right )
    count++
  }

  traverse(root) 

  return count

};

console.log( countNodes(tree) )
