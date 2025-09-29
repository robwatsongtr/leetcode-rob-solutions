/*
Leetcode 21: Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Approach:
Take the two linked lists, and link them together by changing the references of a node
to point to the next smallest item.

Also use a dummy head.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/

const util = require('util')

// because no built in linked list class in JS
class ListNode {
  constructor( val = null, next = null) {
    this.val = val;
    this.next = next; 
  }
}


list1 = new ListNode(4);
list1 = new ListNode(2, list1 );
list1 = new ListNode(1, list1 );

list2 = new ListNode(4);
list2 = new ListNode(3, list2 );
list2 = new ListNode(1, list2 );



var mergeTwoLists = function(list1, list2) {
  // initialzie dummy node
  let dummy = new ListNode(-1)

  // initialize two pointers to point to the heads of list1 and list2
  let p1 = list1
  let p2 = list2

  // initialize current pointer to point to the dummy node
  let current = dummy 

  while( p1 !== null && p2 !== null ) {
    if( p1.val <= p2.val ) {
      // If p1.val is less than or equal to p2.val, add the node from list1 to 
      // the merged list, and move p1 to its next node.
      current.next = p1
      p1 = p1.next

    } else {
      // If p2.val is less than p1.val, add the node from list2 to the merged 
      // ist, and move p2 to its next node.
      current.next = p2
      p2 = p2.next

    }
    // move current pointer over to the newly added node in the merged list.
    current = current.next 
  }

  // if there are any nodes left on either p1 or p2, append them to end of list 
  if( p1 !== null ) {
    current.next = p1
  }

  if( p2 !== null) {
    current.next = p2
  }


  return dummy.next 
    
};



console.log(util.inspect( mergeTwoLists(list1, list2), { depth: null } ) )


  