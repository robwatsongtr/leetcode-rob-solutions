/*

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


function bfs(tree) {
  if(!tree) return 
  let queue = [tree] // put the tree in the queue

  while( queue.length > 0) {
    const atNode = queue.shift() // current node is dequeued from the front 

    console.log(`cur node: ${atNode.val} queue length:${queue.length}  queue state: ${JSON.stringify(queue)} `)
    if( atNode.left )  queue.push( atNode.left ) // put left side in queue (enqueue)
    if( atNode.right ) queue.push( atNode.right ) // put right side in queue (enqueue)
   }
}
                       
console.log( bfs(tree) )