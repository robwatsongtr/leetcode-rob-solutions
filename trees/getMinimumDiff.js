/*
530. Minimum Absolute Difference in BST

Given the root of a Binary Search Tree (BST), return the minimum absolute 
difference between the values of any two different nodes in the tree.

Example 1:

Input: root = [4,2,6,1,3]
Output: 1

Example 2:

Input: root = [1,0,48,null,null,12,49]
Output: 1


LC Disc. hint: use inorder traversal. Inorder traversal is the way to 
traverse a BST to get all the values in order 

*/


class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const tree = new TreeNode( 4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6)
)



// SIMPLIFIED / REFACTORED VERSION
const getMinimumDistance = (root) => {
  let minDiff = Infinity;
  let prevVal = undefined;

  function traverseInOrder(node) {
    if( node.left) traverseInOrder(node.left);

    if (prevVal !== undefined) {
      minDiff = Math.min( minDiff, Math.abs(node.val - prevVal) );
    }
    prevVal = node.val;

    if( node.right) traverseInOrder(node.right);
  }

  traverseInOrder(root);

  return minDiff;
};




// OLDER VERSION
const getMinimumDistanceOld = (root) => {
  let dataArr = []
  
  function traverseInOrder(node) {
    if( node.left ) traverseInOrder(node.left) 
    dataArr.push(node.val)
    if( node.right ) traverseInOrder( node.right )
  }

  function calcMin(arr) {
    let minDiff = Infinity
    
    for( let i = 1; i < arr.length; i++ ) {
      let absDiff = Math.abs( arr[i] - arr[i - 1] )
      if( absDiff < minDiff) {
       minDiff = absDiff
      }
    }

    return minDiff
  }

  traverseInOrder(root) 

  let result = calcMin(dataArr)

  return result  

}

console.log( getMinimumDistance(tree) )





