/*
637. Average of Levels in Binary Tree


Given the root of a binary tree, return the average value of the nodes on each 
level in the form of an array. 
Answers within 10-5 of the actual answer will be accepted.

Strategy: use BFS:

Breadth-First Search (BFS) is an algorithm used to traverse or search through 
tree and graph structures level by level. 

1. Create a queue to store nodes that need to be processed.
2. Start by pushing the root node of the tree into the queue.
3. While the queue is not empty, do the following:
    Dequeue a node from the front of the queue.
    Process the node (e.g., print its value or perform any desired operation).
    Enqueue its left and right children if they exist.
4. Repeat step 3 until the queue becomes empty.

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (  /* if */ val === undefined  ? /* t */  0 :  /* f */ val)
    this.left = ( /* if */ left === undefined ? /* t */ null : /* f */ left)
    this.right = ( /* if */ right === undefined ? /* t */ null : /* f */ right)
  }
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

function bfs(root) {
  if(!root) return 
  let queue = [root] // put the value of the root as the first thing in the queue

  while( queue.length > 0) {
    const atNode = queue.shift() // current node is dequeued from the front 

    console.log(`cur node: ${atNode.val} queue length:${queue.length}  queue state: ${JSON.stringify(queue)} `)
    if( atNode.left )  queue.push( atNode.left ) // put left side in queue (enqueue)
    if( atNode.right ) queue.push( atNode.right ) // put right side in queue (enqueue)
   }
}
                       



// console.log( bfs(tree2) )





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