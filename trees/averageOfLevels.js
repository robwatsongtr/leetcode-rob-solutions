/*
637. Average of Levels in Binary Tree


Given the root of a binary tree, return the average value of the nodes on each 
level in the form of an array. 
Answers within 10-5 of the actual answer will be accepted.

Strategy: use BFS:

Breadth-First Search (BFS) is an algorithm used to traverse or search through tree and graph structures level by level. To implement BFS using the provided TreeNode definition, you can follow these steps:

1. Create a queue to store nodes that need to be processed.
2. Start by pushing the root node of the tree into the queue.
3. While the queue is not empty, do the following:
    Dequeue a node from the front of the queue.
    Process the node (e.g., print its value or perform any desired operation).
    Enqueue its left and right children if they exist.
4. Repeat step 3 until the queue becomes empty.


*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function bfs()