/*

LC 237

Delete Node in a Linked List

Write a function to delete a node in a singly-linked list. 
You will not be given access to the head of the list, 
instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

4 - 5 - 1 - 9

4 - 1 - 1 - 9

4 - 1 - 9

*/

function ListNode(val) {
  this.val = val;
  this.next = null; 
}

// input is [4, 5, 1, 9], node 5
var deleteNode = (node) => {

  // make the given node be the same value as the next node (copy)
  // [4, 1, 1, 9]
  node.val = node.next.val; 

  // delete next node by wiring up to the one after (next.next)
  // [4, 1, 9]
  node.next = node.next.next; 

}