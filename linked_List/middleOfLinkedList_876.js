// LC 876 Middle of Linked List

/*
Given the head of a singly linked list, return the middle node of the 
linked list.
*/


// Definition fo Singly Linked List --------------

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next) 
}

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
//----------------------------------------------

// Appoarch: Two pointers, fast and slow: 
// By doing next.next each iteration is 2x then for right, 
// it hits the end of the list at the same time the left pointer 
// hits the middle. Clever. 

/**
 * @param {ListNode} head
 * @return {ListNode}
*/

var middleNode = function(head) {
  
  let slowPtr = head;
  let fastPtr = head;

  // need both stopping cases. If the list is odd length the 
  // fast pointer will end on the last node, if its even
  // it will end on the next.null (The null ), in order to 
  // get the rightmost middle node 
  while( fastPtr !== null && fastPtr.next !== null ) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next
  }
  return slowPtr;

};

list = new ListNode(5);
list = new ListNode(4, list );
list = new ListNode(3, list );
list = new ListNode(2, list );
list = new ListNode(1, list );

console.log('list = ', list );
console.log('middle node = ', middleNode(list) );


