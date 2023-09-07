// Leetcode 94 Binary Tree Inorder Traversal
//
// Given the root of a binary tree, return the inorder 
// traversal of its nodes' values.


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

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

                            // root
const tree = new TreeNode(  1, 
  //    root.left         root.left.left    root.left.right
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  //   root.right        root.right.left   root.right.right 
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

const tree2 = new TreeNode( 3, 
  new TreeNode(9, new TreeNode(null), new TreeNode(null)),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);


var inorderTraversal = function(root) {
  let data = []

  function traverse(node) {
    if(!node) return []
    if(node.left) traverse(node.left) 
    data.push(node.val)
    if(node.right) traverse (node.right)
  }

  traverse(root)

  return data

};

console.log( inorderTraversal(tree ) )


