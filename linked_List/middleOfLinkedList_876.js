// LC 876 Middle of Linked List

/*

Given the head of a singly linked list, return the middle node of the 
linked list.

If there are two middle nodes, return the second middle node.

1. count total nodes
2. calculate the middle node position
3. iterate until middle node 

*/



// function ListNode(val, next) {
//   if( val === undefined ) {
//     val = 0; 
//   } else {
//     val = val; 
//   }

//   if( this.next === undefined ) {
//     next === null;
//   } else {
//     next === next; 
//   }
// }

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next) 
}

// Two pointers: 
// By doing next.next each iteration is 2x then for right, 
// it hits the end of the list at the same time the left pointer 
// hits the middle. Clever. 

var middleNode = function(head) {

  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next) 
  }

  let left = head;
  let right = head;

  while( right !== null && right.next !== null ) {
    left = left.next;
    right = right.next.next
  }
  return left;

};