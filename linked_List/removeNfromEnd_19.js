/*

LC 19 Remove Nth Node from End Of List

Given the head of a linked list, remove the nth node from the 
end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]

Hint: 

Maintain two pointers and update one with a delay of n steps.

*/


// Definition of Singly Linked List:--------- 
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
//-------------------------------------------

/*
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/



const removeNthFromEnd = (head, n) => {

  let slowPtr = head;
  let fastPtr = head; 
  let count = 1; 

  while( fastPtr.next !== null ) {
    count++;
    fastPtr = fastPtr.next; 
    
    // we're going for count n + 1 for the slow pointer to land on the node
    // before the one we want to remove
    if( count > n + 1 ) {
      slowPtr = slowPtr.next; 
    }

  }

  if( count === n) {
    return head.next; 
  }

  slowPtr.next = slowPtr.next.next; 

  return head; 
    
};

// make list:   1 -> 2 -> 3 -> 4 -> 5

list = new ListNode(5);
list = new ListNode(4, list );
list = new ListNode(3, list );
list = new ListNode(2, list );
list = new ListNode(1, list );

console.log(list);

console.log( removeNthFromEnd(list, 2) );

