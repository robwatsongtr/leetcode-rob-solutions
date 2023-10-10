/*
101. Symmetric Tree
s
Given the root of a binary tree, check whether it is a mirror of itself
(i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false

Rob intuition: DFS, at each step in the recursion, check that you have both a left and 
a right side.

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const tree = new TreeNode(1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4) ),
  new TreeNode(2, new TreeNode(4), new TreeNode(5) )
)


var isSymmetric = function(root) {

  function isMirror(left, right) {
    // base case 1: there were nodes on both left and right sides equally so symmetric nodes
    if( left === null && right === null ) return true

    // base case2: one side had a left or right but not the other, noes NOT symmetric 
    if( left == null || right === null ) return false

    // base case 3: values aren't mirrored left-right so return false. 
    if( left.val !== right.val) return false

    // return true if the possibly mirrored nodes pass the tests above 
    if( isMirror(left.left, right.right) && isMirror( left.right, right.left ) ){
      return true
    } else {
      return false 
    }

  }

  if (root === null ) return true

  return isMirror( root.left, root.right ) 

};

console.log( isSymmetric(tree) )