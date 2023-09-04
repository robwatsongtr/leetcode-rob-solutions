/*
637. Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the nodes on each 
level in the form of an array. 
Answers within 10-5 of the actual answer will be accepted.

Strategy: use BFS:

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (  /* if */ val === undefined  ? /* t */  0 :  /* f */ val)
    this.left = ( /* if */ left === undefined ? /* t */ null : /* f */ left)
    this.right = ( /* if */ right === undefined ? /* t */ null : /* f */ right)
  }
}

                   
const tree2 = new TreeNode( 3, 
  new TreeNode(9, new TreeNode(null), new TreeNode(null)),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

var averageOfLevels = function(root) {
  if(!root) return 
  let queue = [root] 
  const result = []

  while( queue.length > 0) {
    const levelSize = queue.length
    let levelSum = 0

    // add up all the values on a particular level of the tree 
    for( let i = 0; i < levelSize; i++ ) {
      let atNode = queue.shift()
      levelSum += atNode.val
      if( atNode.left )  queue.push( atNode.left ) // put left side in queue (enqueue)
      if( atNode.right ) queue.push( atNode.right ) // put right side in queue (enqueue)
    }

    const levelAvg = levelSum / levelSize
    result.push(levelAvg)
  }

  return result 
};

console.log( averageOfLevels(tree2) )