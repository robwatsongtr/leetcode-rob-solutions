/*
100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they
are the same or not.

Two binary trees are considered the same if they are structurally identical, 
and the nodes have the same value.

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: false


*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (  /* if */ val === undefined  ? /* t */  0 :  /* f */ val)
    this.left = ( /* if */ left === undefined ? /* t */ null : /* f */ left)
    this.right = ( /* if */ right === undefined ? /* t */ null : /* f */ right)
  }
}

const tree1 = new TreeNode( 1,
  new TreeNode(2), new TreeNode(3)
)

const tree2 = new TreeNode( 1,
  new TreeNode(2)
)


var isSameTree = function(p, q) {

  // Base case 1: if both trees are null, they are the same
  if( !p && !q ) return true

  // Base case 2: If one tree is null and the other is not, they are different
  if( !p || !q ) return false 

  // Base case 3: if current nodes don't have thee same value return false 
  if( p.val !== q.val ) {
    return false
  }

  // recursively check left and right subtrees:
  return isSameTree( p.left, q.left ) && isSameTree( p.right, q.right )

};

console.log( isSameTree(tree1, tree2))