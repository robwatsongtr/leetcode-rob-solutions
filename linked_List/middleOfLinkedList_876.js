// LC 876 Middle of Linked List

/*
Given the head of a singly linked list, return the middle node of the 
linked list.
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

/**
 * @param {ListNode} head
 * @return {ListNode}
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next) 
}

// Two pointers, fast and slow: 
// By doing next.next each iteration is 2x then for right, 
// it hits the end of the list at the same time the left pointer 
// hits the middle. Clever. 

var middleNode = function(head) {
  
  let left = head;
  let right = head;

  while( right !== null && right.next !== null ) {
    left = left.next;
    right = right.next.next
  }
  return left;

};

list = new ListNode(5);
list = new ListNode(4, list );
list = new ListNode(3, list );
list = new ListNode(2, list );
list = new ListNode(1, list );

console.log('list = ', list );
console.log('middle node = ', middleNode(list) );


